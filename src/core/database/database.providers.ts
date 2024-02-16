import { DATA_SOURCE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { DataSource } from 'typeorm';
import { User, Permission, Role } from '../entities';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      config.entities = [User, Permission, Role];
      const dataSource = new DataSource(config);
      return dataSource.initialize();
    },
  },
];
