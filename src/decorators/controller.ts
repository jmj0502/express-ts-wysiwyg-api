import { Router } from "express";
import Container from "typedi";
import { Route } from "./controller.interfaces";

export const router: Router = Router({mergeParams: true});

/**
 * Decorator factory that should be applied to any class that should be treated as a constructor.
 * @param prefix The path prefix of a specific router. 
 */
export function Controller(prefix: string) {
	return function (constructor: Function) {
		Reflect.defineMetadata('prefix', prefix, constructor);
		if (!Reflect.hasMetadata('routes', constructor)) {
			Reflect.defineMetadata('routes', [], constructor);
		}
		const routes = Reflect.getMetadata('routes', constructor) as Array<Route>;
		const instance: any = Container.get(constructor);
		routes.forEach((route: Route) => {
			router[route.method](`${prefix}/${route.path}`, instance[route.methodName].bind(instance));
		});
	}
}

/**
 * Decorator factory that should be applied to any method intended to handle a `GET` HTTP Request.
 * @param route The endpoint that will trigger the decorated method.
 */
export function Get(route: string) {
	return function (target: Object, propertyKey: string): void {
		if (!Reflect.hasMetadata('routes', target.constructor)) {
			Reflect.defineMetadata('routes', [], target.constructor);
		}
		const routes = Reflect.getMetadata('routes', target.constructor) as Array<Route>;
		routes.push({
			path: route,
			method: 'get',
			methodName: propertyKey
		});
		Reflect.defineMetadata('routes', routes, target.constructor);
	}
}

/**
 * Decorator factory that should be applied to any method intended to handle a `POST` HTTP Request.
 * @param route The endpoint that will trigger the decorated method.
 */
export function Post(route: string) {
	return function(target: Object, propertyKey: string): void {
		if (!Reflect.hasMetadata('routes', target.constructor)) {
			Reflect.defineMetadata('routes', [], target.constructor);
		}
		const routes = Reflect.getMetadata('routes', target.constructor) as Array<Route>;
		routes.push({
			path: route,
			method: 'post',
			methodName: propertyKey
		});
		Reflect.defineMetadata('routes', routes, target.constructor);
	}
}

/**
 * Decorator factory that should be applied to any method intended to handle a `PUT` HTTP Request.
 * @param route The endpoint that will trigger the decorated method.
 */
export function Put(route: string) {
	return function(target: Object, propertyKey: string): void {
		if (!Reflect.hasMetadata('routes', target.constructor)) {
			Reflect.defineMetadata('routes', [], target.constructor);
		}
		const routes = Reflect.getMetadata('routes', target.constructor) as Array<Route>;
		routes.push({
			path: route,
			method: 'put',
			methodName: propertyKey
		});
		Reflect.defineMetadata('routes', routes, target.constructor);
	}
}

/**
 * Decorator factory that should be applied to any method intended to handle a `DELETE` HTTP Request.
 * @param route The endpoint that will trigger the decorated method.
 */
export function Delete(route: string) {
	return function(target: Object, propertyKey: string): void {
		if (!Reflect.hasMetadata('routes', target.constructor)) {
			Reflect.defineMetadata('routes', [], target.constructor);
		}
		const routes = Reflect.getMetadata('routes', target.constructor) as Array<Route>;
		routes.push({
			path: route,
			method: 'delete',
			methodName: propertyKey
		});
		Reflect.defineMetadata('routes', routes, target.constructor);
	}
}