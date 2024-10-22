import { Module } from '@nestjs/common';
import { VendorController } from './vendor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorSchema } from './schema/vendor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: VendorSchema, name: "vendor" }])],
  providers: [],
  controllers: [VendorController]
})
export class VendorModule { }
