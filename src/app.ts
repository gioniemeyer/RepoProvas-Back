import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import * as coursesControllers from "./controllers/coursesControllers";
import * as subjectsControllers from "./controllers/subjectsControllers";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/filter-courses", coursesControllers.filter);
app.get("/filter-subjects", subjectsControllers.filter);


export default app;

export async function init () {
  await connectDatabase();
}