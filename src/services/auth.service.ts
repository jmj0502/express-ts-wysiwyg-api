import { Service } from "typedi";
import { Request, Response, NextFunction } from "express";
import { JWTService } from "./jwt.service";
import { OAuth2Client } from "google-auth-library";

@Service()
export class AuthService {
	private OAuthClient: OAuth2Client;
	constructor() {
		this.OAuthClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
	}

	public async singIn(token: string) {
		const ticket = await this.OAuthClient.verifyIdToken({
			idToken: token,
			audience: process.env.GOOGLE_CLIENT_ID
		});
		const payload = ticket.getPayload();
		console.log("///// Google Token Payload /////");
		console.log(JSON.stringify(payload, null, 2));
		console.log("///// Google Token Payload /////");
		return payload;
	}
}