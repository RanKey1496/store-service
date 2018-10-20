import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({name: 'stores'})
export class Store {

    @PrimaryColumn({name: 'store_id'})
    public storeId: number;

    @Column()
    public name: string;

    @Column()
    public address: string;

    @Column()
    public phone: string;

    @Column()
    public lat: number;

    @Column()
    public lng: number;

    @Column()
    public type: string;

    @Column()
    public time_in_store: number;

}