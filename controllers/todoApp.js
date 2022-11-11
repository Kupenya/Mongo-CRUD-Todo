import Todo from '../models/todoApp.js'
import mongoose from 'mongoose'

export async function getTodos(req, res, next) {
    const all = await Todo.find()
    res.json(all)
    console.log(all)
}

export async function createTodo(req, res, next) {
    try {
        const todo = new Todo({
            _id: mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            timestamp: Date()
        })
        await todo.save()
        res.json(todo)

    } catch (error) {
        res.status(200).json({
            error: error.message
        })
    }
}

export async function getTodoById(req, res, next) {
    const todo = await Todo.findById(req.params.todoId)
    res.json(todo)
}

export async function updateTodo(req, res, next) {
    const id = req.params.todoId
    const updated = req.body
    const options = {
        new: true
    }
    const todo = await Todo.findByIdAndUpdate(id, updated, options)
    res.send({
        "message": "Task has been updated successifully"
    })
}

export async function deleteTodo(req, res, next) {
    try {
        const id = req.params.todoId
        const data = await Todo.findByIdAndDelete(id)
        res.send(`Task with title '${data.title}' has been deleted`)
        console.log('Task successifully deleted')
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}