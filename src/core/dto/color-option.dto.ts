import { IsMongoId, IsOptional, IsString, IsUrl } from 'class-validator';

export class ColorOptionDto {
  @IsMongoId()
  @IsOptional()
  readonly id: string;

  @IsString()
  @IsOptional()
  readonly color: string;

  @IsUrl({}, { each: true })
  @IsOptional()
  readonly imageUrls: Array<string>;
}
