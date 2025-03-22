import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ListenerModule } from './listener/listener.module';
import { ReceiverModule } from './receiver/receiver.module';
import { RedisCacheModule } from './redis/redis.module';

@Module({
  imports: [DatabaseModule,ListenerModule,ReceiverModule,RedisCacheModule],
})
export class AppModule {}
