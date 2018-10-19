import { injectable, inject } from 'inversify';
import Types from '../config/types';
import { StoreRepository } from '../repository/storeRepository';
import { Store } from '../entity/store';

export interface StoreService {
    getStoreById(id: number): Promise<Store>;
}

@injectable()
export class StoreServiceImpl implements StoreService {

    @inject(Types.StoreRepository)
    private storeRepository: StoreRepository;

    public async getStoreById(id: number): Promise<Store> {
        return await this.storeRepository.findById(id);
    }

}
