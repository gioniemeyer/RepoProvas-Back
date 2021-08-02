import { getRepository } from "typeorm";
import Professor from "../entities/professorsEntity";
import ProfessorsSubjects from "../entities/professorsSubjects";
import SubjectInterface from "../interfaces/subjectInterface";

export async function getProfessors(id: number) {
    const professors = await getRepository(ProfessorsSubjects).find({
        relations: ['professors'],
        select: ['subjectsId', 'professors'],
        where: [{"subjectsId": id}]
    })
    return (professors)
};

export async function getAllProfessorsBySubj(subjects: SubjectInterface[]) {
    const response = [];
    const objectForProfessors: any = {};
    const professors = await getRepository(ProfessorsSubjects).find({
        relations: ['professors'],
        select: ['subjectsId', 'professors']
    });

    const idsOfSubjects = subjects.map(subj => subj.id);

    for(let i = 0; i < professors.length; i++) {
        if(idsOfSubjects.includes(professors[i].subjectsId)) {
            let id = professors[i].professors.id;
            if(!objectForProfessors[id]) {
                objectForProfessors[id] = true;
                response.push(professors[i].professors)
            }
        }
    }
    return (response)
}

export async function getAll() {
    const professors = await getRepository(Professor).find();

    return professors
}