import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schema/product.schema'

@Module({
  imports: [MongooseModule.forFeature([{ schema: ProductSchema, name: "product" }])],
  controllers: [ProductController],
  providers: [],
})
export class ProductModule { }
