import { ObjectId } from 'mongodb'
import { Document } from 'mongoose'

export interface IPost extends Document {
  msg:  string
}

export interface INews extends Document {
  title: string,
}

export interface ITagesschau extends Document {
  _id: ObjectId,
  title: string,
  detailsweb: string,
  date: string,
}

export interface ITagesschauClient extends Document {
  _id: string;
  title: string;
  detailsweb: string;
  date: string;
}

export interface IFeedback extends Document {
  selectedEmoji: string;
  message: string;
}