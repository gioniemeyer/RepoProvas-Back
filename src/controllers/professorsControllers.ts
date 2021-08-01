import {Request, Response} from "express";
import * as professorsServices from "../services/professorsServices";

export async function filter(req: Request, res: Response) {
    try {
        const id = parseInt(req.body.id);
        const professors = await professorsServices.getProfessors(id);
        return res.status(200).send(professors)
    } catch(err) {
        res.status(500).send(err);
    }
}