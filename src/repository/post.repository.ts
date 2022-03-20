import { prisma } from "../app";
import { PostDTO } from "../dtos/post.dto";
import { Service } from "typedi";
import { Post } from "@prisma/client";

@Service()
export class PostRepository {
	constructor() {}

	public async getMany(): Promise<Array<Post>> {
		const posts = await prisma.post.findMany({
			include: {
				author: true
			}
		});
		return posts;
	}

	public async getOne(postId: number): Promise<Post | null> {
		const post = await prisma.post.findUnique({
			where: {
				id: postId
			},
			include: {
				author: true  
			}
		});
		if (!post) {
			return null;
		}
		return post;
	}

	public async create(postData: PostDTO): Promise<Post> {
		const createdPost: Post = await prisma.post.create({
			data: {
				title: postData.title,
				coverImg: postData.coverImg,
				content: postData.content,
				authorId: postData.authorId
			}
		});
		return createdPost;
	}

	public async update(postId: number, updatedData: Partial<PostDTO>): Promise<Post> {
		const updatedPost = await prisma.post.update({
			data: updatedData,
			where: {
				id: postId
			}
		});
		return updatedPost;
	}

	public async delete(postId: number): Promise<Post> {
		const deletedPost = await prisma.post.delete({
			where: {
				id: postId
			}
		});
		return deletedPost;
	}
}