import {Request, Response} from "express";
import * as coursesServices from "../services/coursesServices";

export async function filter(req: Request, res: Response) {
    try {
        const courses = await coursesServices.getCourses();
        res.status(200).send(courses);    
    } catch(err) {
        res.status(500).send(err);
    }
}