import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/receiver.dto';
import { ReceiverService } from './receiver.service';

@Controller()
export class ReceiverController {
  constructor(private readonly receiverService: ReceiverService) {}

  @Post('receiver')
  receiveData(@Body() body: CreateUserDto) {
    return this.receiverService.processUser(body);
  }
}
