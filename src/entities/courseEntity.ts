import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from "typeorm";
import Subject from "./subjectEntity";
import CourseSubjects from "./coursesSubjectsEntity"

@Entity('courses')
export default class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @ManyToMany(() => Subject, subject => subject.courses)
    subjects: Subject[];

    @OneToMany(() => CourseSubjects, courseSubject => courseSubject.courses)
    coursesSubjects: CourseSubjects[];

}