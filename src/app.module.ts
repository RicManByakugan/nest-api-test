import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { EntityModule } from './entityObject/entity.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntityModule } from './user-entity/user-entity.module';
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    UserModule, 
    EntityModule,
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ["dist/**/*.entity{.ts,.js}"],
      // ONLY FOR DEV
      synchronize: true, 
      retryAttempts: 2,
    }),
    UserEntityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
