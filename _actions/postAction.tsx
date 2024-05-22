"use server"

import connectDB from "../lib/dbConnect"
import PostModel from "../models/postModel"
import { IPost } from "../interfaces/IPost"

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