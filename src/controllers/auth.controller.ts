import { Service } from "typedi";
import { Request, Response } from "express";
import {
	Controller,
	Post
} from "../decorators/controller";

@Controller("/api/auth")
@Service()
export class AuthController {

	@Post("sign-up")
	public async signUp(req: Request, res: Response): Promise<Response> {
		return res.status(200).json({success: true, message:"logged in"});
	}
}