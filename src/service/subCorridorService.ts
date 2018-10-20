import { inject, injectable } from 'inversify';
import Types from '../config/types';
import { Subcorridor } from '../entity/subcorridor';
import { SubCorridorRepository } from '../repository/subCorridorRepository';

export interface SubCorridorService {
    getSubCorridorById(id: number): Promise<Subcorridor>;
    getSubCorridorsByCorridorId(id: number): Promise<Subcorridor[]>;
}

@injectable()
export class SubCorridorServiceImp implements SubCorridorService {

    @inject(Types.CorridorRepository)
    private subCorridorRepository: SubCorridorRepository;

    public async getSubCorridorById(id: number): Promise<Subcorridor> {
        return await this.subCorridorRepository.findById(id);
    }

    public async getSubCorridorsByCorridorId(id: number): Promise<Subcorridor[]> {
        return undefined;
    }

}