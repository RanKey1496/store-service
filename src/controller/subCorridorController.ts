import { injectable, inject } from 'inversify';
import { RegistrableController } from './RegistrableController';
import { Application, Request, Response, NextFunction } from 'express';
import Types from '../config/types';
import { dataResponse } from '../utils/responses';
import { SubCorridorService } from '../service/subCorridorService';

@injectable()
export class SubCorridorController implements RegistrableController {

    @inject(Types.SubCorridorService)
    private subCorridorService: SubCorridorService;

    public register(app: Application): void {

        app.route('/store/corridor/:id/subcorridor')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const id = req.params.id;
                    const result = await this.subCorridorService.getSubCorridorsByCorridorId(id);
                    return dataResponse(res, result);
                } catch (error) {
                    return next(error);
                }
            });

        app.route('/store/subcorridor/:id')
            .get(async (req: Request, res: Response, next: NextFunction) => {
                try {
                    const id = req.params.id;
                    const result = await this.subCorridorService.getSubCorridorById(id);
                    console.log(result);
                    return dataResponse(res, result);
                } catch (error) {
                    return next(error);
                }
            });
    }

}