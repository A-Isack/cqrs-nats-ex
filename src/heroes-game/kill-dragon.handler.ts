
// here we execute the write command that is fired to the write database

import { CommandHandler, EventPublisher, ICommandHandler } from "@nestjs/cqrs";
import { KillDragonCommand } from "./kill-dragon.command";
import { HeroRepository } from "./heroes.repository";

@CommandHandler(KillDragonCommand)
export class KillDragonHandler implements ICommandHandler<KillDragonCommand>{
    constructor(private repository: HeroRepository, private publisher: EventPublisher) {}
    async execute(command: KillDragonCommand) {
        
        console.log('executing killDragon command')
        console.log(command)

        await this.repository.addRow(command)
        
        
    }
}