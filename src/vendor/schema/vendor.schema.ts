import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ICommon } from 'src/common/common-schema.interface';
import { Product } from 'src/product/schema/product.schema';

export interface IVendor extends ICommon {
  name: string;
  email: string;
  phoneNumber: number;
  password: string;
  location: string;
  products: Product[];
}

@Schema({ timestamps: true, })
export class Vendor extends Document implements IVendor {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: number;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  location: string;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }])
  products: Product[];  // Relationship with Products
}

export const VendorSchema = SchemaFactory.createForClass(Vendor);