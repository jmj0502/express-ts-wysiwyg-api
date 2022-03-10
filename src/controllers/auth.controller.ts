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
		const existingUser = await this.usersService.findUser(userInfo?.email as string);
		let accessToken: string;
		if (!existingUser) {
			const newUser = await this.usersService.createUser(userInfo?.email as string);
			accessToken = this.jwtService.generateToken({email: newUser?.email as string});
			return res.status(200).json({success: true, token: accessToken, user: newUser, message: "success"});
		}
		accessToken = await this.jwtService.generateToken({email: existingUser.email});
		return res.status(200).json({success: true, token: accessToken, user: existingUser, message: "success"});
	}
}