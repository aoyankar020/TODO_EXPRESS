const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://aoyankar36:admin@cluster0.wc1urj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export const DB = client.db("todosDB");
