import { Container } from 'inversify';
import { RegistrableController } from '../controller/RegistrableController';
import Types from './types';
import { CorridorController } from '../controller/corridorController';
import { CorridorRepository } from '../repository/corridorRepository';
import { SubCorridorController } from '../controller/subCorridorController';
import { CorridorService, CorridorServiceImp } from '../service/corridorService';
import { StoreController } from '../controller/storeController';
import { StoreRepository } from '../repository/storeRepository';
import { StoreService, StoreServiceImpl } from '../service/storeService';
import { SubCorridorRepository } from '../repository/subCorridorRepository';
import { SubCorridorService, SubCorridorServiceImp } from '../service/subCorridorService';
import { PreferenceService, PreferenceServiceImp } from '../service/preferenceService';

const container: Container = new Container();

// Controllers
container.bind<RegistrableController>(Types.Controller).to(CorridorController);
container.bind<RegistrableController>(Types.Controller).to(StoreController);
container.bind<RegistrableController>(Types.Controller).to(SubCorridorController);

// Services
container.bind<CorridorService>(Types.CorridorService).to(CorridorServiceImp);
container.bind<StoreService>(Types.StoreService).to(StoreServiceImpl);
container.bind<SubCorridorService>(Types.SubCorridorService).to(SubCorridorServiceImp);
container.bind<PreferenceService>(Types.PreferenceService).to(PreferenceServiceImp);

// Repository
container.bind<CorridorRepository>(Types.CorridorRepository).to(CorridorRepository);
container.bind<StoreRepository>(Types.StoreRepository).to(StoreRepository);
container.bind<SubCorridorRepository>(Types.SubCorridorRepository).to(SubCorridorRepository);

export { container };