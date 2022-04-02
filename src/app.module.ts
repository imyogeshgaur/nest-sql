import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './users/typeorm';
import * as path from "path"
const localEnv = path.resolve('./src/.env');
require('dotenv').config({ path: localEnv})
@Module({
  imports: [UsersModule, CustomerModule,TypeOrmModule.forRoot({
    type:"mysql",
    host:"localhost",
    port:3306,
    username:process.env.SERVER_USERNAME,
    password:process.env.SERVER_PASSWORD,
    database:"practise_db",
    entities,
    synchronize:true
  })],
})
export class AppModule {}

