import { Container } from 'inversify';
import { RegistrableController } from '../controller/RegistrableController';
import Types from './types';
import { StoreController } from '../controller/storeController';
import { StoreService, StoreServiceImpl } from '../service/storeService';
import { StoreRepository } from '../repository/storeRepository';

const container: Container = new Container();

// Controllers
container.bind<RegistrableController>(Types.Controller).to(StoreController);

// Services
container.bind<StoreService>(Types.StoreService).to(StoreServiceImpl).inSingletonScope();

// Repositories
container.bind<StoreRepository>(Types.StoreRepository).to(StoreRepository).inSingletonScope();


export { container };