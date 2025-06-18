// Importing express module
import express, { Application, Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import todoRouter from "./app/todos/todoes.router";

const app: Application = express();
// Using this middleware for getting client side json data into req.body
app.use(express.json());
const filePath = path.join(__dirname, "../../../db/db_file.json");

// Handling routes request
app.use("/todos", todoRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome To Our Todo List- App");
});

app.put("/todoes/:title", (req: Request, res: Response) => {
  const data = req.params;
  console.log(data);
});

export default app;
