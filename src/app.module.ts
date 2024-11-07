import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EntityModule } from './entityObject/entity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityModule } from './user-entity/user-entity.module';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';

dotenv.config();
@Module({
  imports: [
    UserModule, 
    EntityModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      // ONLY FOR DEV
      synchronize: true, 
      retryAttempts: 2,
      extra: {
        ssl: {
          ca: path.join(__dirname, '..', 'ca.pem'),
          rejectUnauthorized: false,
        },
      },
    }),
    UserEntityModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env', 
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
