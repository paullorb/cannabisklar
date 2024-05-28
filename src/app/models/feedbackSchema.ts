import { Schema, model, Model } from 'mongoose'
import { IFeedback } from '@/app/interfaces/IPost'

const feedbackSchema = new Schema <IFeedback>({
  selectedEmoji: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
}, {timestamps: true})

const FeedbackModel: Model <IFeedback> = model<IFeedback>('Feedback', feedbackSchema)

export default FeedbackModel