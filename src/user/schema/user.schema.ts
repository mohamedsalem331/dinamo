import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Cart } from 'src/cart/schema/cart.schema';
import { PaymentMethodSchema, PaymentMethod } from './payment.schema';
import { ICommon } from 'src/common/common-schema.interface';

export interface IUser extends ICommon {
  username: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  password?: string;
  provider?: string;
  providerId?: string;
  paymentMethods?: PaymentMethod[]
}

@Schema({ timestamps: true, })
export class User extends Document implements IUser {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  dateOfBirth: string;

  @Prop()
  password?: string;

  @Prop()
  provider?: string;  // 'google'

  @Prop()
  providerId?: string;  // OAuth provider unique user id

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Cart' }])
  carts: Cart[]

  @Prop({ type: [PaymentMethodSchema], default: [] })
  paymentMethods: PaymentMethod[];
}

export const UserSchema = SchemaFactory.createForClass(User);