import { Transform } from 'class-transformer';
import { IsInt, IsMongoId } from 'class-validator';

export class PostCartDetailDto {
  @IsMongoId()
  readonly deviceID: string;

  @IsMongoId()
  readonly stockID: string;

  @IsInt()
  @Transform(({ value }) => parseInt(value))
  readonly quantity: number;
}

export class DeleteCartDetailDto {
  @IsMongoId()
  readonly id: string;
}

export class UpdateCartDetailDto extends DeleteCartDetailDto {
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  readonly quantity: number;
}
