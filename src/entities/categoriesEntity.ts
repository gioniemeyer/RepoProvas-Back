import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('categories')
export default class Category{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    Name: string;
}