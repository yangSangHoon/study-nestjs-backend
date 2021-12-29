import { InputType, OmitType } from "@nestjs/graphql";
import { Restaurant } from "../entities/nestaurant.entity";

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id'], InputType) {}