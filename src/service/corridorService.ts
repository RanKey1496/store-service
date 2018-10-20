import { inject, injectable } from 'inversify';
import Types from '../config/types';
import { CorridorRepository } from '../repository/corridorRepository';
import { Corridor } from '../entity/corridor';

export interface CorridorService {
    getCorridorById(id: number): Promise<Corridor>;
    getStoreCorridors(id: number): Promise<Corridor[]>;
}

@injectable()
export class CorridorServiceImp implements CorridorService {

    @inject(Types.CorridorRepository)
    private corridorRepository: CorridorRepository;

    public async getCorridorById(id: number): Promise<Corridor> {
        return await this.corridorRepository.findById(id);
    }

    public async getStoreCorridors(id: number): Promise<Corridor[]> {
        return undefined;
    }

}