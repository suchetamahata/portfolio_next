import mongoose from 'mongoose'
import  message from '../../schema/schema.js'
import dotenv from 'dotenv'

dotenv.config()

export default async function handler(req, res) {
  try {
    mongoose.connect( 'mongodb+srv://nosuchetamahatano:moonstars96@cluster0.k0urpm5.mongodb.net/',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })

    console.log(req.body)
    const newMessage = new message(req.body)
    await newMessage.save()
    res.json({
      message: 'New doc saved Sucessfully'
    })
  } catch (error) {
    console.error(error);
    res.status(500)
  }
}

