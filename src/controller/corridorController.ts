import { RegistrableController } from './RegistrableController';
import { Application, Request, NextFunction, Response } from 'express';
import { injectable, inject } from 'inversify';
import { dataResponse } from '../utils/response';
import Types from '../config/types';
import { CorridorService } from '../service/corridorService';

@injectable()
export class CorridorController implements RegistrableController {

    @inject(Types.CorridorService)
    private corridorService: CorridorService;

    public register(app: Application): void {
        app.route('/store/corridor/:id')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const id = req.params.id;
                    const result = await this.corridorService.getCorridorById(id);
                    return dataResponse(res, result);
                } catch (error) {
                    return next(error);
                }
            });
    }

}