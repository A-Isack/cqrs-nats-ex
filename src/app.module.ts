import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroesGameModule } from './heroes-game/heroes-game.module'

@Module({
  imports: [HeroesGameModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
