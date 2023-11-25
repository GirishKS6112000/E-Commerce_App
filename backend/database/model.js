import mongoose from "mongoose";

const s = new mongoose.Schema({
  name: { type: String, trime: true, required: true },
  email: { type: String, trime: true, required: true, unique: true },
  password: { type: String, trime: false, required: true },
});

const usermodel = new mongoose.model("users", s);

export default usermodel;
