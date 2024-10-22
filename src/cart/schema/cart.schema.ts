import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { ICommon } from 'src/common/common-schema.interface';
import { CART_STATUS } from 'src/common/types';
import { Product } from 'src/product/schema/product.schema';
import { User } from 'src/user/schema/user.schema';

export interface ICart extends ICommon {
  status: CART_STATUS;
  products: Product[];
  user: User;
}

@Schema({ timestamps: true, })
export class Cart extends Document implements ICart {
  @Prop({ type: String, enum: ['active', 'completed'], default: 'active' })
  status: CART_STATUS;

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Product' }])
  products: Product[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
  user: User;
}

export const CartSchema = SchemaFactory.createForClass(Cart);