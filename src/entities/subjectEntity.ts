import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import Course from "./courseEntity";

@Entity('subjects')
export default class Subject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;

    @ManyToMany(() => Course, course => course.subjects)
    @JoinTable()
    courses: Course[];
}