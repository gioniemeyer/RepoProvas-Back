import {Request, Response} from "express";
import * as subjectsServices from "../services/subjectsServices";

export async function filter(req: Request, res: Response) {
    const subjects = await subjectsServices.getSubjects();
    res.send(subjects);
}