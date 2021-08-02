import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Subject from "./subjectEntity";

@Entity('tests')
export default class Test {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subjectId: number;

    @Column()
    professorId: number;

    @Column()
    categoryId: number;

    @Column()
    pdfLink: string;

    @Column()
    courseId: number;

    @Column()
    year: number;

    @Column()
    yearSemester: number;
    
    @ManyToOne(() => Subject, subjects => subjects.tests)
    subjects: Subject;
}