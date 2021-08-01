import { getRepository } from "typeorm";
import Category from "../entities/categoriesEntity";
import Test from "../entities/testsEntity";
import BodyTest from "../interfaces/testInterface";
import CategoryInterface from "../interfaces/categoryInterface";

export async function create(body: BodyTest) {
    const {courseId, subjectId, professorId, category, pdfLink} = body
    const categoryObj: CategoryInterface = await getRepository(Category).findOne({Name: category})
    const categoryId = categoryObj.id;
    await getRepository(Test).insert({courseId, subjectId, professorId, categoryId, pdfLink})
}