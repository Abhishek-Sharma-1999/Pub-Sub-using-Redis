import { Module } from "@nestjs/common";
import { ReceiverService } from "./receiver.service";
import { UserRepository } from "../database/repositories/user.repository";
import { ReceiverController } from "./receiver.controller";

@Module({
    controllers:[ReceiverController],
    providers:[ReceiverService,UserRepository]
})
export class ReceiverModule{}