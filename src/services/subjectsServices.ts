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