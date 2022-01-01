import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { carsDTO } from './dto/cars.DTO';
@Controller('cars')
export class CarsController {
  @Get()
  getCars(): [] {
    return [];
  }

  @Post()
  async addCars(@Body() car: carsDTO) {
    console.log(car);
  }

  @Put(':id')
  updateCars(@Param('id') id: string, @Body() car: carsDTO) {
    console.log(id);
    console.log(car);
  }

  @Delete(':id')
  deleteCars(@Param('id') id: string) {
    console.log(id);
  }
}
