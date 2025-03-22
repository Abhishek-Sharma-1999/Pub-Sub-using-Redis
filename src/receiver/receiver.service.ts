import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/receiver.dto";
import { UserRepository } from "../database/repositories/user.repository";
import { RedisService } from "src/redis/redis.service";
import { REDIS_CHANNELS } from "src/redis/redis.contants";

@Injectable()
export class ReceiverService{
    constructor(
        private readonly userRepository:UserRepository,
        private readonly redisService:RedisService
    ){}

    async processUser(body:CreateUserDto){
        const user=await this.userRepository.createRecord(body);
        //Publish Event to redis
        return await this.redisService.publish(REDIS_CHANNELS.USER_CREATED,JSON.stringify(user));
    }
}