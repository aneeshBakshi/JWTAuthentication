import express from "express";
import * as TaskController from "../controllers/TaskController";

const taskRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Task
 *   description: Endpoints for Task management
 */

taskRouter.get("/", TaskController.getTask);
taskRouter.post("/", TaskController.createTask);
taskRouter.put("/", TaskController.updateTask);
taskRouter.delete("/", TaskController.deleteTask);
export { taskRouter };
