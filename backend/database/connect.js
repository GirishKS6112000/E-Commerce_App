import mongoose from "mongoose";

export function connectdb() {
  mongoose.connect("mongodb://127.0.0.1:27017/E-commerce_App").then((data) => {
    if (data) {
      console.log("Database Connected");
    }
  });
}
