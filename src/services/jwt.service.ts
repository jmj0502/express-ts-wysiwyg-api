import { Service } from "typedi";
import { sign, verify } from "jsonwebtoken";

@Service()
export class JWTService {
	constructor() {}

	public generateToken(userData: {email: string}): string {
		const token = sign(userData, 'secret', {
			expiresIn: "12h"
		});
		return token;
	}

	public async verifyToken(token: string): Promise<{email: string} | null> {
		try {
			const payload = await verify(token, 'secret') as {email: string};
			return payload;
		} catch(err) {
			console.log(err);
			return null;
		}
	}
}