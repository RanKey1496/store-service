import { injectable, inject } from 'inversify';
import Types from '../config/types';
import { StoreRepository } from '../repository/storeRepository';

export interface StoreService {
}

@injectable()
export class StoreServiceImpl implements StoreService {
}
