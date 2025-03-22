import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ListenerModule } from './listener/listener.module';
import { ReceiverModule } from './receiver/receiver.module';

@Module({
  imports: [DatabaseModule,ListenerModule,ReceiverModule],
})
export class AppModule {}
