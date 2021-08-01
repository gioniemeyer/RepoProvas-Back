import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from "typeorm";
import ProfessorsSubjects from "./professorsSubjects";
import Subject from "./subjectEntity";

@Entity('professors')
export default class Professor {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    Name: string

    @OneToMany(() => ProfessorsSubjects, professorsSubjects => professorsSubjects.professors)
    professorsSubjects: ProfessorsSubjects[];

    @ManyToMany(() => Subject, subjects => subjects.professors)
    subjects: Subject[];

}