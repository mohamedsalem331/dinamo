import { Module } from '@nestjs/common';
import { PaymentMethodSchema, UserSchema } from './schema'
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [MongooseModule.forFeature([{ schema: UserSchema, name: "user" }, { schema: PaymentMethodSchema, name: "payment" }])],
  controllers: [UserController],
  providers: [UserService],
})

export class UserModule {

}
