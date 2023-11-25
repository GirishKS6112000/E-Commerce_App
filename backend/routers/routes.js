import express from "express";
import User from "../controllers/usercontroller.js";

const route = express.Router();

route.post("/signup", User.createUser);
route.post("/login", User.login);
export default route;
