import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Car, CarSchema, Status, StatusSchema } from "./schema/car.schema";
import { CarsController } from "./cars.controller";
import { CarsService } from "./cars.service";

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Car.name, schema: CarSchema },
            { name: Status.name, schema: StatusSchema },
        ]),
    ],
    controllers: [CarsController],
    providers: [CarsService],
})
export class CarsModule {}
