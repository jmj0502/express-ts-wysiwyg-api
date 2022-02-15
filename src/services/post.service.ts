import { Post } from "@prisma/client";
import { Service } from "typedi";
import { PostDTO, UpdatePostDTO } from "../dtos/post.dto";
import { PostRepository } from "../repository/post.repository";

@Service()
export class PostService {
	constructor(
		private postRepository: PostRepository
	) {}

	public async getPosts(): Promise<Array<Post>> {
		const post = await this.postRepository.getMany();
		return post;
	}

	public async getPost(postId: number): Promise<Post | null> {
		let post: Post | null;
		try {
			post = await this.postRepository.getOne(postId);
		} catch (err) {
			console.log(err);
			return null;
		}
		return post;
	}

	public async createPost(postData: PostDTO): Promise<Post | null> {
		let createdPost: Post | null;
		try {
			createdPost = await this.postRepository.create(postData);
		} catch(err) {
			console.log(err);
			return null;
		}
		return createdPost;
	}

	public async updatePost(postId: number, postData: UpdatePostDTO): Promise<Post | null> {
		let updatedPost: Post | null;
		try {
			updatedPost = await this.postRepository.update(postId, postData);
		} catch(err) {
			console.log(err);
			return null;
		}
		return updatedPost;
	}

	public async deletePost(postId: number): Promise<Post | null> {
		let deletedPost: Post | null;
		try {
			deletedPost = await this.postRepository.delete(postId);
		} catch(err) {
			console.log(err);
			return null;
		}
		return deletedPost;
	}
} 