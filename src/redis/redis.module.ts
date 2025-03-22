import { Global, Module } from "@nestjs/common";
import { RedisService } from "./redis.service";
//Redis module is global, so it can be available to all the services
@Global()
@Module({
    providers:[RedisService],
    exports:[RedisService]
})

export class RedisCacheModule{}