import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
class PaymentMethod {
  @Prop({ required: true })
  type: string; // 'credit-card', 'paypal'

  @Prop()
  cardNumber?: string;

  @Prop()
  cardHolderName?: string;

  @Prop()
  expirationDate?: string;

  @Prop()
  cvv?: string;
}

const PaymentMethodSchema = SchemaFactory.createForClass(PaymentMethod);
export { PaymentMethod, PaymentMethodSchema }