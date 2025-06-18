"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const mongoConfig_1 = require("../../config/mongoConfig");
const app = (0, express_1.default)();
// Creating Express Router Object
const todoRouter = express_1.default.Router();
const filePath = node_path_1.default.join(__dirname, "../../../db/db_file.json");
// Get home page
// todoRouter.get("/", (req: Request, res: Response) => {
//   res.send("Response from Todo.Touders");
// });
// Getting all Todoes From Mongo DB
todoRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const all_data = yield mongoConfig_1.DB.collection("todos").find({}).toArray();
        console.log(all_data);
        res
            .status(200)
            .json({ message: "Data Fetched successfully!", todos: all_data });
    }
    catch (error) {
        console.error("Error Fetching todos:", error);
        res.status(500).json({ error: "Failed to Fetch todos" });
    }
}));
// Create New ToDo into Mongodb
todoRouter.post("/create", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        const collection = mongoConfig_1.DB.collection("todos");
        const result = yield collection.insertOne(newTodo);
        console.log(result);
        res
            .status(201)
            .json({ message: "Todo added successfully!-Router", todo: newTodo });
    }
    catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({ error: "Failed to create todo" });
    }
}));
app.put("/todo/:id", (req, res) => {
    const data = req.params.id;
    console.log(data);
    res.send(data);
});
exports.default = todoRouter;
