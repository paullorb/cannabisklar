import { Schema, model, Model } from 'mongoose';
import { IPost } from '../interfaces/IPost';  // Assuming IPost is moved to a separate interfaces file

const postSchema = new Schema<IPost>({
  msg: {
    type: String,
    required: true
  }
}, { timestamps: true });

const PostModel: Model<IPost> = model<IPost>('Post', postSchema);

export default PostModel;
