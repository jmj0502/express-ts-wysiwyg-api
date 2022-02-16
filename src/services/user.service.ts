import { UserRepository } from "../repository/user.repository";
import { Service } from "typedi";
import { User } from "@prisma/client";

@Service()
export class UserService {
	constructor(
		private userRepository: UserRepository
	) {}

	public async createUser(email: string): Promise<User | null> {
		let user: User | null;
		try {
			user = await this.userRepository.create(email);
			if (!user) {
				return null;
			}
		} catch (err) {
			console.log(err);
			return null;
		}
		return user;
	}

	public async findUser(email: string) {
		let user: User | null;
		try {
			user = await this.userRepository.find(email);
			if (!user) {
				return null;
			}
		} catch(err) {
			console.log(err);
			return null;
		}
		return user;
	}
}