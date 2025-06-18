import app from "./app";
import { client } from "./config/mongoConfig";

let server;
const port = process.env.PORT || 3000;

const boostServer = async () => {
  try {
    await client.connect();
    server = app.listen(port, () => {
      console.log(`Connected Mongo DB On Port : ${port}`);
    });
  } catch (err) {
    throw err;
  }
};

boostServer();
