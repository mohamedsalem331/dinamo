import { Module } from '@nestjs/common';
import { PaymentMethodSchema, UserSchema } from './schema'
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';

@Module({
  imports: [MongooseModule.forFeature([{ schema: UserSchema, name: "user" }, { schema: PaymentMethodSchema, name: "payment" }])],
  controllers: [UserController],
  providers: [],
})

export class UserModule {

}
