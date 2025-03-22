import { Module } from "@nestjs/common";
import { ListenerService } from "./listener.service";
import { UserCopyRepository } from "../database/repositories/user-copy-repository";
@Module({
    providers:[ListenerService,UserCopyRepository]
})
export class ListenerModule{}