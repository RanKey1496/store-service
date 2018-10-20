import { GenericRepositoryImp } from './repository';
import { injectable } from 'inversify';
import { getRepository } from 'typeorm';
import { Store } from '../entity/store';

@injectable()
export class StoreRepository extends GenericRepositoryImp<Store> {

    constructor() {
        super(getRepository(Store));
    }

}