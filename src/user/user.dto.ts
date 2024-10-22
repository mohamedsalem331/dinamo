import { Type } from 'class-transformer';
import {
  IsString,
  MinLength,
  IsNumber,
  Min,
  Max,
  IsNotEmpty,
  IsEmail,
  IsPhoneNumber,
  IsOptional,
} from 'class-validator'

export class UserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(10, { message: 'Phone number must be at least 10 digits.' })
  @IsPhoneNumber(null, { message: 'Phone number must be at least 10 digits.' })
  phoneNumber: string

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNumber()
  @Min(1950)
  @Max(2024)
  dateOfBirth: string

  @IsOptional()
  @IsString()
  provider?: string;

  @IsOptional()
  @IsString()
  providerId?: string;
}
