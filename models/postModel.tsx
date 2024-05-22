import { Schema, model, models, Model, Document } from 'mongoose';

// Define an interface for the document using TypeScript
export interface IPost extends Document {
  msg: string;
}

// Define the schema with typed fields
const postSchema = new Schema<IPost>({
  msg: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Create the model conditionally if it does not already exist
const PostModel: Model<IPost> = models.post || model<IPost>('post', postSchema);

export default PostModel;
