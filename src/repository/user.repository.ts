import { prisma } from "../app"; 
import { Service } from "typedi";
import { User } from "@prisma/client";
import { UserRegistrationParameters } from "../utils/types/user.types";

@Service()
export class UserRepository {
	constructor() {}

	public async create({email, name, profilePic}: UserRegistrationParameters): Promise<User | null> {
		const user = await prisma.user.create({
			data: {
				email,
				fullName: name,
				profilePic 
			}
		});
		if (!user) {
			return null;
		}
		return user;
	}

	public async find(email: string): Promise<User | null> {
		const user = await prisma.user.findUnique({
			where: {
				email: email
			}
		});
		if (!user) {
			return null;
		}
		return user;
	}
}