import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}