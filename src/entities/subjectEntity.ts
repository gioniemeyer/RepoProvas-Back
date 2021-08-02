import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import Course from "./courseEntity";
import CourseSubjects from "./coursesSubjectsEntity"
import Professor from "./professorsEntity";
import ProfessorsSubjects from "./professorsSubjects";
import Test from "./testsEntity";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @Column()
    semester: number;

    @ManyToMany(() => Course, course => course.subjects)
    courses: Course[];

    @ManyToMany(() => Professor, professor => professor.subjects)
    professors: Professor[];

    @OneToMany(() => CourseSubjects, courseSubject => courseSubject.subjects)
    coursesSubjects: CourseSubjects[];

    @OneToMany(() => ProfessorsSubjects, professorsSubjects => professorsSubjects.subjects)
    professorsSubjects: ProfessorsSubjects[];

    @OneToMany(() => Test, tests => tests.subjects)
    tests: Test[];
}