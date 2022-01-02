import { ApiProperty } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  plate: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  model: string;

  @ApiProperty()
  year: string;
}
