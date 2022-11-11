import express from 'express'
import {
    getTodos,
    getTodoById,
    updateTodo,
    deleteTodo,
    createTodo
} from '../controllers/todoApp.js'

const appRoutes = express.Router()

appRoutes.get('/', getTodos)
appRoutes.post('/', createTodo)
appRoutes.get('/:todoId', getTodoById)
appRoutes.patch('/:todoId', updateTodo)
appRoutes.delete('/:todoId', deleteTodo)

export default appRoutes