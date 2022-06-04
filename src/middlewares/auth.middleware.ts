import { Request, Response, NextFunction } from "express";
import { Service } from "typedi";
import { JWTService } from "../services/jwt.service";

@Service()
export class AuthMiddleware {
	constructor(
		private jwtService: JWTService
	) {}

	public verifyAuth() {
		return async (req: Request, res: Response, next: NextFunction) => {
			console.log("ROUTES INFO");
			console.log(req.params.id)
			console.log(req.method);
			console.log(req.path);
			console.log("ROUTES INFO");
			console.log("Auth headers");
			console.log(req.headers.authorization);
			console.log("Auth headers");
			if (!req.headers.authorization) {
				return res.status(401).json({success: false, message: "Unauthorized!"});
			}
			const validatedToken = await this.jwtService.verifyToken((<string>req.headers.authorization).split(" ")[1]);
			if (!validatedToken) {
				return res.status(401).json({success: false, message: "Unauthorized!"});
			}
			return next();
		}
	}
}