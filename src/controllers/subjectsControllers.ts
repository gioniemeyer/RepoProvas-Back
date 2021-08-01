import {Request, Response} from "express";
import * as subjectsServices from "../services/subjectsServices";

export async function filter(req: Request, res: Response) {
    try {
        const id = parseInt(req.body.id);
        const subjects = await subjectsServices.getSubjects(id);
        res.status(200).send(subjects);    
    } catch(err) {
        res.status(500).send(err)
    }
}