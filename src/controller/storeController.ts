import { injectable, inject } from 'inversify';
import { RegistrableController } from './RegistrableController';
import { Application, Request, Response, NextFunction } from 'express';
import Types from '../config/types';
import { StoreService } from '../service/storeService';
import { dataResponse } from '../utils/responses';

@injectable()
export class StoreController implements RegistrableController {

    @inject(Types.StoreService)
    private storeService: StoreService;

    public register(app: Application): void {
        app.route('/store/:id')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const id = req.params.id;
                    const result = await this.storeService.getStoreById(id);
                    return dataResponse(res, result);
                } catch (error) {
                    return next(error);
                }
            });
    }

}