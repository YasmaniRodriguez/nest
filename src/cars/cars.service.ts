import { Injectable } from '@nestjs/common';
import { Car } from './interface/cars.interface';

@Injectable()
export class CarsService {
  private readonly cars: Car[] = [];

  async create(newCar: Car) {
    await this.cars.push({ id: this.cars.length + 1, ...newCar });
    const data = await this.cars.filter(
      (obj: Car) => obj.plate === newCar.plate,
    );
    return data[0];
  }

  async find(filters) {
    const keys: string[] = Object.keys(filters);

    return this.cars.filter((obj) => {
      return keys.every((key) => {
        if (!filters[key].length) {
          return true;
        } else {
          return filters[key].includes(obj[key]);
        }
      });
    });
  }

  async update(record, fields) {
    const data = this.cars.find((row) => row.id === parseInt(record));
    if (data === undefined) {
      return false;
    } else {
      const keys: string[] = Object.keys(fields);
      await keys.forEach((key) => {
        data[key] = fields[key];
      });

      return data;
    }
  }

  async delete(record) {
    const data = this.cars.find((row) => row.id === parseInt(record));

    if (data === undefined) {
      return false;
    } else {
      const i: number = this.cars.indexOf(data);
      if (i !== -1) {
        this.cars.splice(i, 1);
      }
      return data;
    }
  }
}
