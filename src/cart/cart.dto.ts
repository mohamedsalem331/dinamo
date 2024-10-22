import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsPhoneNumber,
  MinLength,
  IsEmail,
  IsEnum,
} from 'class-validator'
import { CART_STATUS } from 'src/common/types';
import { ProductDto } from 'src/product/product.dto';
import { UserDto } from 'src/user/user.dto';


export class CartDto {
  @IsEnum(CART_STATUS)
  status: CART_STATUS;

  @ValidateNested()
  @Type(() => UserDto)
  user: UserDto;

  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}
