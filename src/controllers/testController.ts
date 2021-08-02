import {Request, Response} from "express";
import BodyTest from "../interfaces/testInterface";
import * as testService from "../services/testService";

export async function send(req: Request, res: Response) {
    try {
        const body: BodyTest = req.body;
        const {courseId, subjectId, professorId, category, pdfLink, year, yearSemester} = body

        if(!category || !pdfLink || !year || !yearSemester) return res.sendStatus(400);

        await testService.create(body);
        
        res.sendStatus(201)    
    } catch(err) {
        res.status(500).send(err);
    }
};

export async function findByProfessorId(req: Request, res: Response) {
    try {
        const professorId = parseInt(req.params.professorId);
    
        const tests = await testService.findByProfessor(professorId);
    
        res.status(200).send(tests);            
    } catch(err) {
        res.status(500).send(err);
    }
}

export async function findBySubjectId(req: Request, res: Response) {
    try {
        const subjectId = parseInt(req.params.subjectId);
    
        const tests = await testService.findBySubject(subjectId);
    
        res.status(200).send(tests);            
    } catch(err) {
        res.status(500).send(err);
    }
}