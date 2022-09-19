import { IsNotEmpty, IsString } from 'class-validator';

export class SpecificationDto {
  @IsString()
  @IsNotEmpty()
  screen: string;

  @IsString()
  @IsNotEmpty()
  backCamera: string;

  @IsString()
  @IsNotEmpty()
  frontCamera: string;

  @IsString()
  @IsNotEmpty()
  cpu: string;
}
