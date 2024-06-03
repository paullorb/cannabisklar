"use server"

import connectDB from "@/app/lib/dbConnect";
import PostModel from "@/app/models/postModel";
import { IPost } from "@/app/interfaces/IPost";

interface GetPostsResponse {
  data?: IPost[];
  errMsg?: string;
}

export async function getPosts(): Promise<GetPostsResponse> {
  try {
    await connectDB(); 

    const data = await PostModel.find().lean<IPost[]>()
    return { data }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    console.error('Error getting posts:', message)
    return { errMsg: message }
  }
}