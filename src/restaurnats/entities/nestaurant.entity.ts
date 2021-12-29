import { Field, ObjectType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number;

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5)
    name: string;
    
    @Field(type => Boolean, {nullable: true})
    @Column({default: true})
    @IsBoolean()
    @IsOptional()
    isVegan: boolean;

    @Field(type => String, {defaultValue: '송파'})
    @Column()
    @IsString()
    address: string;

    @Field(type => String)
    @Column()
    @IsString()
    ownerName: string;

    @Field(type => String)
    @Column()
    @IsString()
    categoryName: string;
}

