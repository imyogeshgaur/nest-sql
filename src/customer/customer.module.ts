import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

@Module({
  controllers: [CustomerController],
  providers:[{
    provide:"CUSTOMER_SERVICE",
    useClass:CustomerService,
  }]
})
export class CustomerModule {}
