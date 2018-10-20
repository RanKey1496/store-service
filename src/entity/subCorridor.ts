import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({name: 'sub_corridors'})
export class SubCorridor {

    @PrimaryColumn()
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

    @Column()
    private corridor_id: number;

}