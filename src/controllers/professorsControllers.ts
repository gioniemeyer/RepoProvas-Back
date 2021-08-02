import {Request, Response} from "express";
import * as professorsServices from "../services/professorsServices";
import * as subjectsServices from "../services/subjectsServices";

export async function filterBySubject(req: Request, res: Response) {
    try {
        const id = parseInt(req.body.id);
        const professors = await professorsServices.getProfessors(id);
        return res.status(200).send(professors)
    } catch(err) {
        res.status(500).send(err);
    }
};

export async function filterByCourses(req: Request, res: Response) {
    try {
        const id = parseInt(req.body.id);
        let subjectsArray = await subjectsServices.getSubjects(id);
        const subjects = subjectsArray.map(subject => subject.subjects);
        const professors = await professorsServices.getAllProfessorsBySubj(subjects);
        return res.status(200).send(professors)
    } catch(err) {
        res.status(500).send(err);
    }
}

export async function findAll(req: Request, res: Response) {
    try {
        const professors = await professorsServices.getAll()
        res.status(200).send(professors);
    } catch(err) {
        res.status(500).send(err)
    }
}