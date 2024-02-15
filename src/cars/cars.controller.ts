import { Body, Controller, Post } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CreateCarDto } from "./dto/create-car.dto";

@Controller("cars")
export class CarsController {
    constructor(private readonly carService: CarsService) {}

    @Post()
    async create(@Body() createCarDto: CreateCarDto) {
        await this.carService.create(createCarDto);
    }
}
