import { IsString } from 'class-validator';

export class SpecificationDto {
  @IsString()
  readonly screen: string;

  @IsString()
  readonly cpu: string;

  @IsString()
  readonly gpu: string;
}
