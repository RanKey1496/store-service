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

    public async findRandomWithoutIds(likes: Array<number>, disLike: Array<number>, limit: number) {
        const qb = await this.corridorRepository.createQueryBuilder('Corridor');
        return await qb
                    .where('id NOT IN (:...likes)', { likes }, )
                    .andWhere('id NOT IN (:...disLike)', { disLike ? disLike : '1=1' })
                    .orderBy('RANDOM()')
                    .limit(limit)
                    .getMany();
    }

}