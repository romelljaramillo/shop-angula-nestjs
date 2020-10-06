import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const DatabaseService = [
  TypeOrmModule.forRootAsync({
    imports: [],
    inject: [],
    async useFactory() {
      return {
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        port: +process.env.DB_PORT,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASS,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}']
      } as ConnectionOptions;
    },
  }),
];




