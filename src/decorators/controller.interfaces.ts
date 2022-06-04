import { NextFunction } from "express";

export interface Route {
	path: string;
	method: 'post' | 'get' | 'put' | 'delete';
	methodName: string;
	middlewares: IMiddlewares 
}

export interface IMiddlewares {
	auth?: Function;
}