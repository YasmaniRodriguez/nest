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
  async updateCars(@Param('id') record: string, @Body() fields): Promise<Car> {
    return await this.carsService.update(record, fields);
  }

  @Delete(':id')
  async deleteCars(@Param('id') record: string) {
    console.log(record);
  }
}
