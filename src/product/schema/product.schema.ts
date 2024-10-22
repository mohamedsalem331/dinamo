import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ICommon } from 'src/common/common-schema.interface';
import { Vendor } from 'src/vendor/schema/vendor.schema';

export interface IProduct extends ICommon {
  name: string;
  price: number;
  sku: string;
  description: string;
  quantity?: number;
  vendor: Vendor | string;  // Vendor or ObjectId
}

@Schema({ timestamps: true, })
export class Product extends Document implements IProduct {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  sku: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: 1 })
  quantity?: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Vendor', required: true })
  vendor: Vendor;
}

export const ProductSchema = SchemaFactory.createForClass(Product);