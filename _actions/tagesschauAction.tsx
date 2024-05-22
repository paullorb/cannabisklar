"use server"

import connectDB from "../lib/dbConnect"
import TaggesschauModel from "../models/tagesschau"
import { INews } from "../interfaces/IPost"

interface GetTagesschauRes {
  data?: INews[]
  errMsg?: string;
}

export async function getTagesschau(): Promise<GetTagesschauRes> {
  try {
    await connectDB()

    const data = JSON.parse(JSON.stringify(await TaggesschauModel.find())) as INews[];
    return { data }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error getting posts from tagesschau', message)
    return { errMsg: message}
  }
}