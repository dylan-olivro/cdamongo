import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Car } from "./schema/car.schema";
import { Model } from "mongoose";
import { CreateCarDto } from "./dto/create-car.dto";

@Injectable()
export class CarsService {
    constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) {}

    async create(createCarDto: CreateCarDto): Promise<Car> {
        const createdCar = await this.carModel.create(createCarDto);
        return createdCar;
    }
}
