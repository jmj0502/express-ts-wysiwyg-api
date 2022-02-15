export interface Route {
	path: string;
	method: 'post' | 'get' | 'put' | 'delete';
	methodName: string;
}