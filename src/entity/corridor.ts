import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Subcorridor } from './subcorridor';

@Entity({name: 'corridors'})
export class Corridor {

    @PrimaryGeneratedColumn()
    private id: number;

    @Column()
    private name: string;

    @Column()
    private icon: string;

    @Column()
    private index: number;

    @Column()
    private type: number;

    @Column()
    private description: string;

    @Column()
    private icon_grid: string;

    @Column()
    private image_big: string;

    @Column()
    private image_small: string;

    @OneToMany(type => Subcorridor, subcorridor => subcorridor.corridor)
    sub_corridors: Subcorridor[];

}