import {Request, Response} from "express";
import * as subjectsServices from "../services/subjectsServices";

export async function filter(req: Request, res: Response) {
    const id = parseInt(req.body.id);
    const subjects = await subjectsServices.getSubjects(id);
    res.send(subjects);
}