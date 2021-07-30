import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import Course from "./courseEntity";
import CourseSubjects from "./coursesSubjectsEntity"

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @ManyToMany(() => Course, course => course.subjects)
    courses: Course[];

    @OneToMany(() => CourseSubjects, courseSubject => courseSubject.subjects)
    coursesSubjects: CourseSubjects[];
}