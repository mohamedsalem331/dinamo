import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VendorSchema } from './schema/vendor.schema';

@Module({
  imports: [MongooseModule.forFeature([{ schema: VendorSchema, name: "vendor" }])],
  providers: [VendorService],
  controllers: [VendorController]
})
export class VendorModule { }
