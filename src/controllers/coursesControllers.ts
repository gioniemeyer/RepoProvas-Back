import {Request, Response} from "express";

export function filter(req: Request, res: Response) {
        res.send("OK!");
}