import { RegistrableController } from './RegistrableController';
import { Application, Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { NextFunction } from 'connect';
import Types from '../config/types';
import { StoreService } from '../service/storeService';
import { dataResponse } from '../utils/response';

@injectable()
export class StoreController implements RegistrableController {

    @inject(Types.StoreService)
    private preferenceService: StoreService;

    register(app: Application): void {
    }

}