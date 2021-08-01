import { getRepository } from "typeorm";
import ProfessorsSubjects from "../entities/professorsSubjects";

export async function getProfessors(id: number) {
    const professors = await getRepository(ProfessorsSubjects).find({
        relations: ['professors'],
        select: ['subjectsId', 'professors'],
        where: [{"subjectsId": id}]
    })
    return (professors)
}