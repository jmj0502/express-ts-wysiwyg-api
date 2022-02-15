import { Service } from "typedi";
import { Request, Response } from "express";
import { 
	Controller, 
	Delete, 
	Get,
	Post,
	Put
} from "../decorators/controller";
import { PostService } from "../services/post.service";
import { Post as blog } from "@prisma/client";
import { PostDTO, UpdatePostDTO } from "../dtos/post.dto";

@Controller('/api/blog')
@Service()
export default class PostController {
	constructor(
		private postService: PostService
	) {}

	@Get("")
	public async getPosts(req: Request, res: Response): Promise<Response<Array<blog>>> {
		const posts: Array<blog> = await this.postService.getPosts();
		return res.status(200).json({posts: posts});	
	}

	@Get(":id")
	public async getPost(req: Request, res: Response) {
		console.log("post")
		console.log(req.params['id'])
		console.log("post")
		const post: blog | null = await this.postService.getPost(parseInt(req.params['id']));
		if (!post) {
			return res.status(404).json({success: false, message: "Couldn't find the requested post!"});
		}
		return res.status(200).json({post: post});
	}

	@Post("")
	public async createPost(req: Request, res: Response): Promise<Response> {
		const createdPost: blog | null = await this.postService.createPost(<PostDTO>req.body);
		if (!createdPost) {
			return res.status(500).json({message: "Couldn't create post!"});
		}
		return res.status(201).json({success: true, post: createdPost});
	}

	@Put(":id")
	public async updatePost(req: Request, res: Response) {
		const updatedPost: blog | null = await this.postService.updatePost(
			parseInt(req.params["id"]), 
			<UpdatePostDTO>req.body
		);
		if (!updatedPost) {
			return res.status(500).json({success: false, message: "Couldn't update post!"});
		}
		return res.status(202).json({success: true, post: updatedPost});
	}

	@Delete(":id")
	public async deletePost(req: Request, res: Response) {
		const deletedPost: blog | null = await this.postService.deletePost(		
			parseInt(req.params['id'])
		);
		if (!deletedPost) {
			return res.status(500).json({success: false, message: "Couldn't delete post!"});
		}
		return res.status(202).json({success: true, post: deletedPost});
	}
}