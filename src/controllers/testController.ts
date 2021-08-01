import {Request, Response} from "express";
import BodyTest from "../interfaces/testInterface";
import * as testService from "../services/testService";

export async function send(req: Request, res: Response) {
    try {
        const body: BodyTest = req.body;
        await testService.create(body)
        res.status(201).send(body)    
    } catch(err) {
        res.status(500).send(err);
    }
}