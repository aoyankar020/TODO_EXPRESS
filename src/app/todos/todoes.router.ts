import express, { Application, Request, Response } from "express";
import fs from "node:fs";
import path from "node:path";
import { client, DB } from "../../config/mongoConfig";
const app: Application = express();

// Creating Express Router Object
const todoRouter = express.Router();
const filePath = path.join(__dirname, "../../../db/db_file.json");
// Get home page
// todoRouter.get("/", (req: Request, res: Response) => {
//   res.send("Response from Todo.Touders");
// });

// Getting all Todoes From Mongo DB
todoRouter.get("/", async (req: Request, res: Response) => {
  try {
    const all_data = await DB.collection("todos").find({}).toArray();

    console.log(all_data);
    res
      .status(200)
      .json({ message: "Data Fetched successfully!", todos: all_data });
  } catch (error) {
    console.error("Error Fetching todos:", error);
    res.status(500).json({ error: "Failed to Fetch todos" });
  }
});

// Create New ToDo into Mongodb
todoRouter.post("/create", async (req: Request, res: Response) => {
  try {
    const { title, description, priority, isCompleted } = req.body;
    const dueDate = new Date().toLocaleString();
    const newTodo = {
      title,
      description,
      priority,
      isCompleted,
      dueDate,
    };

    const collection = DB.collection("todos");

    const result = await collection.insertOne(newTodo);
    console.log(result);

    res
      .status(201)
      .json({ message: "Todo added successfully!-Router", todo: newTodo });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({ error: "Failed to create todo" });
  }
});

app.put("/todo/:id", (req: Request, res: Response) => {
  const data = req.params.id;
  console.log(data);
  res.send(data);
});

export default todoRouter;
