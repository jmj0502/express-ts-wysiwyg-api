import { Request, Response, NextFunction } from "express";
import { Service } from "typedi";
import { JWTService } from "../services/jwt.service";
import { unprotectedRoutes } from "../utils/auth.utils";

@Service()
export class AuthMiddleware {
	constructor(
		private jwtService: JWTService
	) {}

	public verifyAuth() {
		return (req: Request, res: Response, next: NextFunction) => {
			const isUnprotected = unprotectedRoutes.findIndex(route => route.path === req.path && route.method === req.method);
			console.log("ROUTES INFO");
			console.log(req.method);
			console.log(req.path);
			console.log("ROUTES INFO");
			if (isUnprotected > -1) {
				console.log("Unprotected route");
				return next();
			}
			const validatedToken = this.jwtService.verifyToken(<string>req.headers.authorization);
			if (!validatedToken) {
				return res.status(401).json({success: false, message: "Unauthorized!"});
			}
			return next();
		}
	}
}