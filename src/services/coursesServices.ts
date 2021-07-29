import { getRepository } from "typeorm";
import Course from "../entities/courseEntity";

export async function getCourses() {
    const courses = await getRepository(Course).find();
    return courses;
}