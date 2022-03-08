import { Service } from "typedi";
import { Request, Response } from "express";
import {
	Controller,
	Post
} from "../decorators/controller";
import { AuthService } from "../services/auth.service";
import { JWTService } from "../services/jwt.service";

@Controller("/api/auth")
@Service()
export class AuthController {
	constructor(
		private authService: AuthService,
		private jwtService: JWTService
	) {}

	@Post("sign-up")
	public async signUp(req: Request, res: Response): Promise<Response> {
		return res.status(200).json({success: true, message:"logged in"});
	}
}