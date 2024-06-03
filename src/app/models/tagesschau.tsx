import { Schema, model, Model } from 'mongoose'
import { ITagesschau } from '@/app/interfaces/types'

const tagesschauSchema = new Schema<ITagesschau> ({
  title: {
     type :  String 
  }
}, {timestamps: true})

const TaggesschauModel: Model<ITagesschau> = model<ITagesschau>('21-05-24', tagesschauSchema)

export default TaggesschauModel