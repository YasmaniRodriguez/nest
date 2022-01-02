import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.DTO';
import { Car } from './interfaces/cars.interface';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Post()
  async addCars(@Body() createCarDto: CreateCarDto) {
    this.carsService.create(createCarDto);
  }

  @Get()
  async getCars(): Promise<Car[]> {
    return this.carsService.findAll();
  }

  @Put(':id')
  async updateCars(@Param('id') id: string, @Body() car: CreateCarDto) {
    console.log(id);
    console.log(car);
  }

  @Delete(':id')
  async deleteCars(@Param('id') id: string) {
    console.log(id);
  }
}
