import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';

export const DatabaseService = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: config.get('DB_TYPE'),
        host: config.get('DB_HOST'),
        username: config.get('DB_USER'),
        port: +config.get('DB_PORT'),
        database: config.get('DB_DATABASE'),
        password: config.get('DB_PASS'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}']
      } as ConnectionOptions;
    },
  }),
];




