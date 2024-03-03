import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { killDragonDto } from './dto/kill-dragon.dto';
import { KillDragonCommand } from './kill-dragon.command';

@Injectable()
export class HeroesGameService {
    constructor(private commandBus: CommandBus){}

    async killDragon(heroId: string, killDragonDto: killDragonDto){
        const command = new KillDragonCommand(heroId, killDragonDto.dragonId)

        console.log('this is the kill dragon command from the service')
        console.log(command)

        const a = await this.commandBus.execute(command)
        console.log('a')
        console.log(a)
    } 
}
