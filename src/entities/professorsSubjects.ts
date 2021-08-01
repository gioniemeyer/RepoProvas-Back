import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Professor from "./professorsEntity";
import Subject from "./subjectEntity";

@Entity('professorsSubjects')
export default class ProfessorsSubjects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    professorsId: number;

    @Column()
    subjectsId: number;

    @ManyToOne(() => Professor, professor => professor.professorsSubjects)
    professors: Professor;

    @ManyToOne(() => Subject, subjects => subjects.professorsSubjects)
    subjects: Subject;
}