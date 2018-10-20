import { RegistrableController } from './RegistrableController';
import { Application, Request, NextFunction, Response } from 'express';
import { injectable, inject } from 'inversify';
import { dataResponse, badRequestResponse } from '../utils/responses';
import Types from '../config/types';
import { CorridorService } from '../service/corridorService';
import { PreferenceService } from '../service/preferenceService';
import { authenticate } from '../service/authService';
import { StoreService } from '../service/storeService';

@injectable()
export class CorridorController implements RegistrableController {

    @inject(Types.CorridorService)
    private corridorService: CorridorService;

    @inject(Types.StoreService)
    private storeService: StoreService;

    @inject(Types.PreferenceService)
    private preferenceService: PreferenceService;

    public register(app: Application): void {
        app.route('/store/corridor/:id')
            .get(authenticate,
                async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const id = req.params.id;
                    const result = await this.corridorService.getCorridorById(id);
                    return dataResponse(res, result);
                } catch (error) {
                    return next(error);
                }
            });

        app.route('/store/:id')
            .get(authenticate,
                async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const store = await this.storeService.getStoreById(req.params.id);
                    if (store !== undefined && store !== null) {
                        const userLikes = await this.preferenceService.findQualified(req.body.token);
                        const result = await this.corridorService.getRecommendedCorridors(userLikes);
                        return dataResponse(res, result);
                    } else {
                        return badRequestResponse(res, 'Unable to find a stora with that id');
                    }
                } catch (error) {
                    return next(error);
                }
            });
    }

}