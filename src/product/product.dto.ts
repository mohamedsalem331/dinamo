import { Type } from 'class-transformer';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  ValidateNested,
} from 'class-validator'
import { VendorDto } from 'src/vendor/vendor.dto';

export class ProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  sku?: number;

  @IsNotEmpty()
  @IsString()
  description: string;

  @ValidateNested()
  @Type(() => VendorDto)
  vendor: VendorDto;
}
