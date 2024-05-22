import PostModel, { IPost } from "../models/postModel"; // Adjust the import to include IPost
import connectDB from "../lib/dbConnect";

// Define the structure of the response using TypeScript interfaces
interface GetPostsResponse {
  data?: IPost[];
  errMsg?: string;
}

export async function getPosts(): Promise<GetPostsResponse> {
  try {
    const dbConnected = await connectDB();
    if (!dbConnected) {
      throw new Error('Database connection failed');
    }

    // Fetch data with correct typing
    const data = await PostModel.find() as IPost[];
    return { data };
  } catch (error) {
    // Ensure the error is an instance of Error for type safety
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error getting posts:', message);
    return { errMsg: message };
  }
}
