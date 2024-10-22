import {
  IsString,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator'

export class FiltersDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  limit?: number;

  @IsOptional()
  @IsNumber()
  offset?: number;
}
