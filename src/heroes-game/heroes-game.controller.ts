import { Controller, Get, Post } from '@nestjs/common';
import { HeroesGameService } from './heroes-game.service';

@Controller('heroes-game')
export class HeroesGameController {
    constructor(private readonly HeroesGameService: HeroesGameService){}

    @Post('killDragon')
    async killDragon(){
        this.HeroesGameService.killDragon('1',{dragonId: '435345345'})
    }
}
