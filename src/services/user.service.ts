import { UserRepository } from "../repository/user.repository";
import { Service } from "typedi";
import { User } from "@prisma/client";
import { UserRegistrationParameters } from "../utils/types/user.types";

@Service()
export class UserService {
	constructor(
		private userRepository: UserRepository
	) {}

	public async createUser(registrationParameters: UserRegistrationParameters): Promise<User | null> {
		let user: User | null;
		try {
			user = await this.userRepository.create(registrationParameters);
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