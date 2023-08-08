import { Request, Response } from "express";

async function getTask(req: Request, res: Response) {
  res.send("getTask");
}
async function createTask(req: Request, res: Response) {
  res.send("createTask");
}
async function updateTask(req: Request, res: Response) {
  res.send("updateTask");
}
async function deleteTask(req: Request, res: Response) {
  res.send("deleteTask");
}

export { getTask, createTask, updateTask, deleteTask };
