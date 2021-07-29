import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import Subject from "./subjectEntity";

@Entity('courses')
export default class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @ManyToMany(() => Subject, subject => subject.courses)
    subjects: Subject[];
}