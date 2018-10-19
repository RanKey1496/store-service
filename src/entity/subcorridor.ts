import { Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Corridor } from './corridor';

@Column({name: 'sub_corridors'})
export class Subcorridor {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private type: number;

    @Column()
    private name: string;

    @Column()
    private icon: string;

    @Column()
    private index: number;

    @Column()
    private struct_id: number;

    @ManyToOne(type => Corridor, corridor => corridor.sub_corridors)
    corridor: Corridor;

}