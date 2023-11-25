import express from "express";
import route from "./routers/routes.js";
import cors from "cors";
import { connectdb } from "./database/connect.js";
const app = express();

connectdb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);

app.listen(5000, () => {
  console.log(`Server running at http://localhost:${5000}`);
});
