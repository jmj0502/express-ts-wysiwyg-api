export interface PostDTO {
	title: string,
	coverImg: string,	
	content: string,
	authorId: number
}

export interface UpdatePostDTO {
	title?: string,
	coverImg?: string,	
	content?: string,
	authorId?: number
}