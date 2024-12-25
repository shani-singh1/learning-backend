import { Todo } from "../models/todo.js"

export const createTodo = async (req, res) =>{
    try {
        const {title, description} = req.body;
        if (!title || !description){
            return res.status(403).json({
                success: true,
                message: "All fields are required !"
            })
        }
    const todo = new Todo({title, description});
    todo.save();

    return res.status(200).json({
        success: true,
        message: "Tdoo Cretead !",
        todo
    })
    } catch (error) {
        console.log(error);
        
    }
}

export const getAllTodo = async (req, res) =>{
    try {
        const todos = await Todo.find();
        console.log(todos);

        return res.json({
            success: true,
            todos 
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const updateTodo = async (req, res) =>{
    try {
        const {title, description} = req.body;
        const todoId = req.params.todoId;
        const todo = await Todo.findByIdAndUpdate(todoId, {title,description},{new:true});
        await todo.save();

        return res.status(200).json({
            success: true,
            message: "Todo updated !",
            todo
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const deleteTodo = async (req, res) =>{
    try {
        const todoId = req.params.todoId;
        await Todo.findByIdAndDelete(todoId);

        return res.status(200).json({
            success: true,
            message: "Todo deleted successfully !"
        })
    } catch (error) {
        console.log(error);
        
    }
}