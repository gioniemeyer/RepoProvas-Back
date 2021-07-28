import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import * as coursesControllers from "./controllers/coursesControllers";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/filter-courses", coursesControllers.filter);

export default app;

export async function init () {
  await connectDatabase();
}