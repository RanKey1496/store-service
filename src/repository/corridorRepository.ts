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

    public async findRandomWithoutIds(query: string, limit: number): Promise<Array<any>> {
        const qb = await this.corridorRepository.createQueryBuilder('Corridor');
        return await qb
                    .where(query)
                    .orderBy('RANDOM()')
                    .limit(limit)
                    .getMany();
    }

    public async findByRecommended(query: string, order: string): Promise<Array<any>> {
        const qb = await this.corridorRepository.createQueryBuilder('Corridor');
        return await qb.where(query).orderBy(order, 'DESC').getMany();
    }

}