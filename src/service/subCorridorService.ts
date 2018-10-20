import { inject, injectable } from 'inversify';
import Types from '../config/types';
import { SubCorridor } from '../entity/subcorridor';
import { SubCorridorRepository } from '../repository/subCorridorRepository';

export interface SubCorridorService {
    getSubCorridorById(id: number): Promise<SubCorridor>;
    getSubCorridorsByCorridorId(id: number): Promise<SubCorridor[]>;
}

@injectable()
export class SubCorridorServiceImp implements SubCorridorService {

    @inject(Types.SubCorridorRepository)
    private subCorridorRepository: SubCorridorRepository;

    public async getSubCorridorById(id: number): Promise<SubCorridor> {
        return await this.subCorridorRepository.findById(id);
    }

    public async getSubCorridorsByCorridorId(id: number): Promise<SubCorridor[]> {
        return await this.subCorridorRepository.findByQuery({ corridor_id: id });
    }

}