import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { UpdateRestaurantDto } from "./dto/update-restaurant.dto";
import { Restaurant } from "./entities/nestaurant.entity";
import { RestaurantService } from "./restaurants.service";

@Resolver(of => Restaurant)
export class RestaurantResolver {
    constructor(private readonly restaurantService: RestaurantService){}
    @Query(returns => [Restaurant])
    restaurants():Promise<Restaurant[]> {
        return this.restaurantService.getAll();
    }
    @Mutation(returns => Boolean)
    async createRestaurant(@Args('input') createRestaurantDto: CreateRestaurantDto): Promise<boolean> {
        console.log(createRestaurantDto);
        try {
            await this.restaurantService.createRestaurant(createRestaurantDto);
            return true;
        } catch(e){
            return false;
        }
        
    }

    @Mutation(returns => Boolean)
    async updateRestaurant(
        @Args('input') updateRestaurantDto: UpdateRestaurantDto
    ): Promise<boolean> {
        try {
            await this.restaurantService.updateRestaurant(updateRestaurantDto);
            return true;
        }catch(e) {
            return false;
        }
    }
}