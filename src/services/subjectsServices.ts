import { getRepository } from "typeorm";
import Course from "../entities/courseEntity";
import CourseSubjects from "../entities/coursesSubjectsEntity";
import Subject from "../entities/subjectEntity";

export async function getSubjects(id: number) {
    const subjects = await getRepository(CourseSubjects).find({
        relations: ['subjects'],
        select: ['coursesId','subjects'],
        where: {"coursesId": id}
    })
    return subjects;
};

export async function CheckCourseId(id: number) {
    const isValid = await getRepository(Course).findOne({
        where:{"id": id}
    });
    return isValid;
}

export async function getAll() {
    const subjects = await getRepository(Subject).find()
    return subjects;
}