import { inject, injectable } from 'inversify';
import Types from '../config/types';
import { CorridorRepository } from '../repository/corridorRepository';
import { Corridor } from '../entity/corridor';

export interface CorridorService {
    getCorridorById(id: number): Promise<Corridor>;
    getStoreCorridors(id: number): Promise<Corridor[]>;
    getRecommendedCorridors(userLikes: Array<any>, corridorIds: Array<any>): Promise<Corridor[]>;
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

    public async getRecommendedCorridors(userLikes: Array<any>, corridorIds: Array<any>): Promise<Corridor[]> {
        const likes: any = [];
        const dislikes: any = [];
        userLikes.map(vote => {
            if (vote.like === 'true') {
                let count = 0;
                let corridor: number;
                corridorIds = corridorIds.filter((c) => {
                    if (c.productId === Number(vote.id)) {
                        console.log('Corridor: ', c.corridorId, ' count: ', count);
                        count++;
                        corridor = c.corridorId;
                        return false;
                    } else {
                        return true;
                    }
                });
                if (corridor !== undefined) {
                    likes.push({ id: corridor, count });
                }
            } else {
                corridorIds.filter(r => {
                    if (Number(vote.id) === r.productId) {
                        dislikes.push(r.corridorId);
                    }
                });
            }
        });
        console.log('Likes: ', likes);
        console.log('Dislike: ', dislikes);
        const limit = 15 - likes.length - dislikes.length;
        return await this.corridorRepository.findRandomWithoutIds(likes.map(l => l.id), dislikes, limit);
        // return Promise.resolve(true);
    }

    private findOccurrencies(id: number, corridors: Array<any>) {
        return corridors.filter((c) => {
            return c.productId === id;
        }).length;
    }

}