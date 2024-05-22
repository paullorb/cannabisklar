import { Schema, model, models, Model, Document } from 'mongoose'
import { INews } from '../interfaces/IPost'

const tagesschauSchema = new Schema<INews> ({
  title: {
    type: String,
    required: true
  }
}, {timestamps: true})

const TaggesschauModel: Model<INews> = models.post || model<INews>('tagesschau', tagesschauSchema)

export default TaggesschauModel