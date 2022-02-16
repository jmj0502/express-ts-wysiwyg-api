import {
	Controller,
	Get,
	Post
} from "../decorators/controller";
import { UserService } from "../services/user.service";
import { Request, Response } from "express";
import { Service } from "typedi";

@Controller("/api/users")
@Service()
export class UserController {
	constructor(
		private userService: UserService
	) {}

	@Post("")
	public async registerUser(req: Request, res: Response): Promise<Response> {
		const result = await this.userService.createUser(req.body['email']);
		if (!result) {
			return res.status(500).json({success: false, message: "Something went wrong!"});
		}
		return res.status(201).json({success: true, user: result});
	}

	@Get("")
	public async logIn(req: Request, res: Response): Promise<Response> {
		const result = await this.userService.findUser(req.body['email']);
		if (!result) {
			return res.status(404).json({success: false, message: "Couldn't find the provided user."});
		}
		return res.status(200).json({success: true, user: result});
	}
}