import { AggregateRoot } from "@nestjs/cqrs";
import { HeroKilledDragonEvent } from "./hero-killed-dragon.event";

export class Hero extends AggregateRoot {
    constructor ( private id: string ){
        super()
    }

    killEnemy(enemyId: string){
        this.apply(new HeroKilledDragonEvent(this.id, enemyId))
    }
}