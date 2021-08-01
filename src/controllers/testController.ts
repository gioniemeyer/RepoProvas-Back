import {Request, Response} from "express";
import BodyTest from "../interfaces/testInterface";
import * as testService from "../services/testService";

export async function send(req: Request, res: Response) {
    try {
        const body: BodyTest = req.body;
        const {courseId, subjectId, professorId, category, pdfLink} = body

        if(!category || !pdfLink) return res.sendStatus(400);
        
        res.sendStatus(201)    
    } catch(err) {
        res.status(500).send(err);
    }
}