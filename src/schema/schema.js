import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    messagetext: String
})

export default  mongoose.models.message ||mongoose.model('message',messageSchema)