import { inject, injectable } from 'inversify';
import Types from '../config/types';
import { CorridorRepository } from '../repository/corridorRepository';
import { Corridor } from '../entity/corridor';

export interface CorridorService {
    getCorridorById(id: number): Promise<Corridor>;
    getStoreCorridors(id: number): Promise<Corridor[]>;
    getRecommendedCorridors(userLikes: Array<any>): Promise<Corridor[]>;
}

@injectable()
export class CorridorServiceImp implements CorridorService {

    @inject(Types.CorridorRepository)
    private corridorRepository: CorridorRepository;

    public async getCorridorById(id: number): Promise<Corridor> {
        return await this.corridorRepository.findById(id);
    }

    public async getStoreCorridors(id: number): Promise<Corridor[]> {
        return undefined;
    }

    public async getRecommendedCorridors(userLikes: Array<any>): Promise<Corridor[]> {
        const limit = 15 - userLikes.length;
        const queryRand = userLikes.length > 0 ? `id NOT IN (${userLikes.map(u => u._id)})` : '1=1';
        if (userLikes.length > 0) {
            const queryRecommend = `id IN (${userLikes.map(u => u._id)})`;
            let orderByRecommend = `${userLikes.map(u => {
                return ` id = ${u._id} DESC `;
            })}`;
            orderByRecommend = orderByRecommend.slice(0, -6);
            const result = await Promise.all([await this.corridorRepository.findByRecommended(queryRecommend, orderByRecommend),
                        await this.corridorRepository.findRandomWithoutIds(queryRand, limit)]);
            return [...result[0], ...result[1]];
        } else {
            return await this.corridorRepository.findRandomWithoutIds(queryRand, limit);
        }
    }

    private findOccurrencies(id: number, corridors: Array<any>) {
        return corridors.filter((c) => {
            return c.productId === id;
        }).length;
    }

}