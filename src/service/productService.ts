import { injectable } from 'inversify';
import { findCorridorsName } from '../repository/productRepository';

export interface ProductService {
    getCorridorsIds(token: string, ids: Array<number>): Promise<Array<any>>;
}

@injectable()
export class ProductServiceImp implements ProductService {

    public async getCorridorsIds(token: string, ids: Array<number>): Promise<Array<any>> {
        return await findCorridorsName(token, ids);
    }

}