import { Injectable, OnModuleInit } from "@nestjs/common";
import { User } from "../database/entities/user.entity";
import { REDIS_CHANNELS } from "../redis/redis.contants";
import { RedisService } from "../redis/redis.service";
import { UserCopyRepository } from "../database/repositories/user-copy-repository";

@Injectable()
export class ListenerService implements OnModuleInit{
    constructor(
        private readonly redisService:RedisService,
        private readonly userCopyRepository:UserCopyRepository
    ){}
    onModuleInit() {
        this.redisService.subscribe(REDIS_CHANNELS.USER_CREATED,(message)=>{
            const user:User=JSON.parse(message);
            //storing in another table
            this.userCopyRepository.createUserCopyRecord(user);
        })
    }

}