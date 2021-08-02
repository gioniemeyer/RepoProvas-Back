import { getRepository } from "typeorm";
import Category from "../entities/categoriesEntity";
import Test from "../entities/testsEntity";
import BodyTest from "../interfaces/testInterface";
import CategoryInterface from "../interfaces/categoryInterface";

export async function create(body: BodyTest) {
    const {courseId, subjectId, professorId, category, pdfLink, year, yearSemester} = body
    const categoryObj: CategoryInterface = await getRepository(Category).findOne({Name: category})
    const categoryId = categoryObj.id;
    await getRepository(Test).insert({courseId, subjectId, professorId, categoryId, pdfLink, year, yearSemester})
}

export async function findByProfessor(professorId: number) {
    const tests = await getRepository(Test).find({
        select: ['categoryId', 'id','pdfLink', 'professorId', 'subjectId', 'year', 'yearSemester'],
        where: [{professorId: professorId}]
    })
    return tests;
}

export async function findBySubject(subjectId: number) {
    const tests = await getRepository(Test).find({
        select: ['categoryId', 'id','pdfLink', 'professorId', 'subjectId', 'year', 'yearSemester'],
        where: [{subjectId: subjectId}]
    })
    return tests;
}