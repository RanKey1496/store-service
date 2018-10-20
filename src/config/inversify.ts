import { Container } from 'inversify';
import { RegistrableController } from '../controller/RegistrableController';
import Types from './types';
import { CorridorController } from '../controller/corridorController';
import { CorridorRepository } from '../repository/corridorRepository';
import { CorridorService, CorridorServiceImp } from '../service/corridorService';

const container: Container = new Container();

// Controllers
container.bind<RegistrableController>(Types.Controller).to(CorridorController);

// Services
container.bind<CorridorService>(Types.CorridorService).to(CorridorServiceImp);

// Repository
container.bind<CorridorRepository>(Types.CorridorRepository).to(CorridorRepository);

export { container };