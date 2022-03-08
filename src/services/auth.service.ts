import { Service } from "typedi";
import { Request, Response, NextFunction } from "express";
import { OAuth2Client } from "google-auth-library";

@Service()
export class AuthService {
	private OAuthClient: OAuth2Client;
	constructor() {
		this.OAuthClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
	}
}