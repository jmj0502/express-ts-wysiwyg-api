import {
	Controller,
	Get,
	Post
} from "../decorators/controller";
import { UserService } from "../services/user.service";
import { Request, Response } from "express";
import { Service } from "typedi";
import { User } from "@prisma/client";

@Controller("/api/users")
@Service()
export class UserController {
	constructor(
		private userService: UserService
	) {}

	@Get(":email")
	public async getUser(req: Request, res: Response): Promise<Response> {
		const result = await this.userService.findUser(req.params['email']);
		if (!result) {
			return res.status(404).json({success: false, message: "Couldn't find the provided user."});
		}
		return res.status(200).json({success: true, user: result});
	}
}