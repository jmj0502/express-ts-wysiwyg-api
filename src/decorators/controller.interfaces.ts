import { NextFunction } from "express";

export interface Route {
	path: string;
	method: 'post' | 'get' | 'put' | 'delete';
	methodName: string;
	protected?: boolean;
	middlewares: Array<Function>
}