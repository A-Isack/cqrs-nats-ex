import { Module } from '@nestjs/common';
import { HeroesGameController } from './heroes-game.controller';
import { HeroesGameService } from './heroes-game.service';
import { KillDragonCommand } from './kill-dragon.command';
import { CqrsModule } from '@nestjs/cqrs';
import { KillDragonHandler } from './kill-dragon.handler';
import { HeroRepository } from './heroes.repository';
@Module({
    imports: [CqrsModule],
    controllers: [HeroesGameController],
    providers: [HeroesGameService, KillDragonCommand, KillDragonHandler, HeroRepository],
})

export class HeroesGameModule {}
