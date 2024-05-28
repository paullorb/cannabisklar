import { Document } from 'mongoose'

export interface IFeedback extends Document {
  selectedEmoji: string;
  message: string;
}