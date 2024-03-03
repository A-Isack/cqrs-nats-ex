import { Injectable } from "@nestjs/common";

@Injectable()
export class HeroRepository {

    async addRow(data: {}){
        console.log('adding data')
        console.log(data)
    }

    return: 'data added successfully'
}