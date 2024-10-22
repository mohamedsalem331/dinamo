import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  ValidateNested,
  IsPhoneNumber,
  MinLength,
  IsEmail,
} from 'class-validator'
import { ProductDto } from 'src/product/product.dto';


export class VendorDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(10, { message: 'Phone number must be at least 10 digits.' })
  @IsPhoneNumber(null, { message: 'Phone number must be at least 10 digits.' })
  phoneNumber: string

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}
