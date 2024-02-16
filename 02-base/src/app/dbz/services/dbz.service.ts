import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({providedIn: 'root'})
export class DbzService {
    constructor() { }
    
    characters:Character[] = [
        {id: uuid(), name:'Krillin', power:1000},
        {id: uuid(), name:'Goku', power:9500},
    ];

    onNewCharacter(character:Character):void{
        character.id = uuid();
        this.characters.push(character);
    }

    // onDeleteCharacter(index:number):void{
    //     this.characters.splice(index,1);
    // }

    deleteCharacterById(id:string){
        this.characters = this.characters.filter(x => x.id != id);
    }
}