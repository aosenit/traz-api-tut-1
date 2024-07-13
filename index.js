import express from "express";

import todoRoutes from "./routes/todo.js";
import { PORT } from "./utils/constants.js";
import connectDB from "./utils/config.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/todos", todoRoutes);

connectDB();

app.listen(PORT, () => {
  console.log("app running at port " + PORT);
});
