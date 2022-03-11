import { Request, Response, NextFunction } from "express";
import { Service } from "typedi";
import { JWTService } from "../services/jwt.service";

@Service()
export class AuthMiddleware {
	constructor(
		private jwtService: JWTService
	) {}

	public verifyAuth() {
		return (req: Request, res: Response, next: NextFunction) => {
			console.log("ROUTES INFO");
			console.log(req.method);
			console.log(req.path);
			console.log("ROUTES INFO");
		}
	}
}