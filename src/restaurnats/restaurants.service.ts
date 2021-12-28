import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Restaurant } from "./entities/nestaurant.entity";

@Injectable()
export class RestaurantService {
    constructor(
        @InjectRepository(Restaurant) 
        private readonly restaurants :Repository<Restaurant>
    ) {
    }
    getAll() : Promise<Restaurant[]> {
        return this.restaurants.find()
    }
}