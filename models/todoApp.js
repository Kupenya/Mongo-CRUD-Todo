import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: String,
    description: String,
    timestamp: Date
}, {
    timestamp: true
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo