import { getRepository } from "typeorm";
import CourseSubjects from "../entities/coursesSubjectsEntity";

export async function getSubjects(id: number) {
    const subjects = await getRepository(CourseSubjects).find({
        relations: ['subjects'],
        select: ['coursesId','subjects'],
        where: {"coursesId": id}
    })
        return subjects;
}

// const subjects = await getRepository(Subject).find({
//     relations: ['subjects', 'coursesSubjects', 'courses'],
//     select:['id', 'Name'],
//     where:[{"coursesId": id}]
// })

// const subjects = await getRepository(CourseSubjects).find({
//     where: {"coursesId": id}
// })
