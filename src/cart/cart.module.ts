import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './schema/cart.schema';
import { CartController } from './cart.controller';

@Module({
  imports: [MongooseModule.forFeature([{ schema: CartSchema, name: "cart" }])],
  controllers: [CartController],
  providers: [],
})
export class CartModule { }
