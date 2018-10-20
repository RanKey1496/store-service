import { GenericRepositoryImp } from './repository';
import { Subcorridor } from '../entity/subcorridor';
import { getRepository } from 'typeorm';
import { injectable } from 'inversify';

@injectable()
export class SubCorridorRepository extends GenericRepositoryImp<Subcorridor> {

    private subCorridorRepository: SubCorridorRepository;

    constructor() {
        const repository = getRepository(SubCorridor);
        super(repository);
        this.subCorridorRepository = repository;
    }

}