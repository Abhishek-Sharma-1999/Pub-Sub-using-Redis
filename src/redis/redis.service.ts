import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
    private readonly pubClient:Redis;
    private readonly subClient:Redis;

    constructor(){
        this.pubClient=new Redis({
            host:process.env.REDIS_HOST,
            port:parseInt(process.env.REDIS_PORT)
        });
        this.subClient=new Redis({
            host:process.env.REDIS_HOST,
            port:parseInt(process.env.REDIS_PORT)
        });
    }

    async publish(channel:string,message:string){
        await this.pubClient.publish(channel,message);
        return 'Data Published'
    }

    async subscribe(channel:string,callback:(message:string)=>void) {
        await this.subClient.subscribe(channel);
        this.subClient.on('message',(ch,msg)=>{
            if(ch===channel){
                callback(msg);
            }
        })
    }
}