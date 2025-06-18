"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB = exports.client = void 0;
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb+srv://aoyankar36:admin@cluster0.wc1urj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
exports.client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});
exports.DB = exports.client.db("todosDB");
