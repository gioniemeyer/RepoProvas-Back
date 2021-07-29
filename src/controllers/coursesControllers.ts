import {Request, Response} from "express";
import * as coursesServices from "../services/coursesServices";

export async function filter(req: Request, res: Response) {
    const courses = await coursesServices.getCourses();
    res.send(courses);
}