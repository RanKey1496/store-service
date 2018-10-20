import { GenericRepositoryImp } from './repository';
import { SubCorridor } from '../entity/subCorridor';
import { getRepository, Repository } from 'typeorm';
import { injectable } from 'inversify';

@injectable()
export class SubCorridorRepository extends GenericRepositoryImp<SubCorridor> {

    private subCorridorRepository: Repository<SubCorridor>;

    constructor() {
        const repository = getRepository(SubCorridor);
        super(repository);
        this.subCorridorRepository = repository;
    }

}