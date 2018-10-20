import { GenericRepositoryImp } from './repository';
import { Corridor } from '../entity/corridor';
import { Repository, getRepository } from 'typeorm';

export class CorridorRepository extends GenericRepositoryImp<Corridor> {

    private corridorRepository: Repository<Corridor>;

    constructor() {
        const corridorRepository = getRepository(Corridor);
        super(corridorRepository);
        this.corridorRepository = corridorRepository;
    }

}