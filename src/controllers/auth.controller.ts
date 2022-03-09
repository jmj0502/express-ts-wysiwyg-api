import { Service } from "typedi";
import { Request, Response } from "express";
import {
	Controller,
	Post
} from "../decorators/controller";
import { AuthService } from "../services/auth.service";
import { JWTService } from "../services/jwt.service";
import { UserService } from "../services/user.service";

@Controller("/api/auth")
@Service()
export class AuthController {
	constructor(
		private usersService: UserService,
		private authService: AuthService,
		private jwtService: JWTService
	) {}

	@Post("sign-up")
	public async signUp(req: Request, res: Response): Promise<Response> {
		const userInfo = await this.authService.singIn(req.body['token'])
		const existingUser = this.usersService.findUser(userInfo?.email as string);
		if (!existingUser) {
			const newUser = this.usersService.createUser(userInfo?.email as string);
			const accessToken = this.jwtService.generateToken(existingUser);
		}
		return res.status(200).json({success: true, message:"logged in"});
	}
}