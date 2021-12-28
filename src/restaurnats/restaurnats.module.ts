import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/nestaurant.entity';
import { RestaurantService } from './restaurants.service';
import { RestaurantResolver } from './restaurnats.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    providers: [RestaurantResolver, RestaurantService]
})
export class RestaurnatsModule {}
