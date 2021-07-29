import { getRepository } from "typeorm";
import Subject from "../entities/subjectEntity";

export async function getSubjects() {
    const subjects = await getRepository(Subject).find();
    return subjects;
}