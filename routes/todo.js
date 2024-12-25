import express from 'express';
import { createTodo, deleteTodo, getAllTodo, updateTodo } from '../controllers/todo.js';

const router = express.Router();

router.route("/").post(createTodo);
router.route("/").get(getAllTodo);
router.route("/:todoId").put(updateTodo);
router.route("/:todoId").delete(deleteTodo);

export default router;

