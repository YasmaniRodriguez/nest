import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.DTO';
import { Car } from './interface/cars.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  async addCars(@Body() createCarDto: CreateCarDto): Promise<Car> {
    return this.carsService.create(createCarDto);
  }

  @Get()
  async getCars(@Query() filters): Promise<Car[]> {
    return this.carsService.find(filters);
  }

  @Put(':id')
  async updateCars(
    @Param('id') record: string,
    @Body() fields,
  ): Promise<Record<string, unknown> | Car> {
    const data = await this.carsService.update(record, fields);
    if (data === false) {
      return { message: 'there is not car' };
    } else {
      return data;
    }
  }

  @Delete(':id')
  async deleteCars(
    @Param('id') record: string,
  ): Promise<Record<string, unknown> | Car> {
    const data = await this.carsService.delete(record);
    if (data === false) {
      return { message: 'there is not car' };
    } else {
      return data;
    }
  }
}
