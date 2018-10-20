import { ConnectionOptions } from 'typeorm';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME, DB_LOGGING } from '../utils/secrets';
import { Corridor } from '../entity/corridor';
import { Store } from '../entity/store';
import { SubCorridor } from '../entity/subCorridor';

export const dbOptions: ConnectionOptions = {
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [
        Corridor,
        Store,
        SubCorridor
    ],
    logging: DB_LOGGING,
    synchronize: false
};