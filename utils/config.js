import mongoose from "mongoose";
import { dbUri } from "./constants.js";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
