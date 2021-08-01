import { getRepository } from "typeorm";
import Course from "../entities/courseEntity";
import CourseResponse from "../interfaces/courseInterface";

export async function getCourses(): Promise<CourseResponse[]> {
    const courses = await getRepository(Course).find();
    return courses;
}