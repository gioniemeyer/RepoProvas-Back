import { getRepository } from "typeorm";
import Test from "../entities/testsEntity";

export async function create(body: any) {
    const {subjectId, professorId, categoryId, pdfLink} = body
    console.log(body)
    await getRepository(Test).insert(body)
    return('ok')
}