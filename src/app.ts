import express from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";
import * as coursesControllers from "./controllers/coursesControllers";
import * as subjectsControllers from "./controllers/subjectsControllers";
import * as professorsControllers from "./controllers/professorsControllers"
import * as testController from "./controllers/testController"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/filter-courses", coursesControllers.filter);
app.post("/filter-subjects", subjectsControllers.filter);
app.post("/filter-professors", professorsControllers.filterBySubject);
app.post("/sendTest", testController.send);

app.post("/filter-all-professors", professorsControllers.filterByCourses);
app.get("/tests/professorId/:professorId", testController.findByProfessorId)

export default app;

export async function init () {
  await connectDatabase();
}