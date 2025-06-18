"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing express module
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const todoes_router_1 = __importDefault(require("./app/todos/todoes.router"));
const app = (0, express_1.default)();
// Using this middleware for getting client side json data into req.body
app.use(express_1.default.json());
const filePath = node_path_1.default.join(__dirname, "../../../db/db_file.json");
// Handling routes request
app.use("/todos", todoes_router_1.default);
app.get("/", (req, res) => {
    res.send("Welcome To Our Todo List- App");
});
app.put("/todoes/:title", (req, res) => {
    const data = req.params;
    console.log(data);
});
exports.default = app;
