export function getUnprotectedRoutes(id?: string): Array<Record<string, string>> {
	return [
		{
			path: '/api/auth/sign-up',
			method: "POST"
		},
		{
			path: `/api/blog/${id}`,
			method: 'GET'
		}
	]; 

}