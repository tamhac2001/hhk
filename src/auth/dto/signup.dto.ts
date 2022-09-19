import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class SignUpDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsPhoneNumber('VN')
  phoneNumber: string;
}
