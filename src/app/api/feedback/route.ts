import connectDB from "@/app/lib/dbConnect";
import FeedbackModel from "@/app/models/feedbackSchema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { selectedEmoji, message } = await req.json()

  try {
    await connectDB('feedback');
    await FeedbackModel.create({ selectedEmoji, message })
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    })
  } catch (error) {
    if(error instanceof mongoose.Error.ValidationError) {
      let errorList = []
      for (let e in error.errors) {
        errorList.push(error.errors[e].message)
      }

      return NextResponse.json({ msg:errorList })
    } else {
      return NextResponse.json({ msg: "Unable to send message." })
    }
  }
}