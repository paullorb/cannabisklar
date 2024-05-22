import { Document } from 'mongoose'

export interface IPost extends Document {
  msg: string
}

export interface INews extends Document {
  title: {
    type: string,
    required: true,
  }
}