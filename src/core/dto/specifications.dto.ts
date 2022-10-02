import { IsOptional, IsString } from 'class-validator';

export class SpecificationsDto {
  @IsString()
  @IsOptional()
  readonly cpu: string;

  @IsString()
  @IsOptional()
  readonly backCamera: string;

  @IsString()
  @IsOptional()
  readonly frontCamera: string;

  @IsString()
  @IsOptional()
  readonly gpu: string;

  @IsString()
  @IsOptional()
  readonly screen: string;

  @IsString()
  @IsOptional()
  readonly ram: string;

  @IsString()
  @IsOptional()
  readonly storage: string;

  @IsString()
  @IsOptional()
  readonly os: string;

  @IsString()
  @IsOptional()
  readonly mobileNetwork: string;
}
