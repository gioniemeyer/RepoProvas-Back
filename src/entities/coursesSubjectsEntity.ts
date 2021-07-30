import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Subject from "./subjectEntity";
import Course from "./courseEntity";

@Entity('course-subjects')
export default class CourseSubjects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    coursesId: number;

    @Column()
    subjectsId: number;

    @ManyToOne(() => Subject, subject => subject.coursesSubjects)
    subjects: Subject;

    @ManyToOne(() => Course, course => course.coursesSubjects)
    courses: Course;
}