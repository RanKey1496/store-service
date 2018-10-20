import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('corridors')
export class Corridor {

    @PrimaryColumn()
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

    @Column()
    private store_id: number;

}