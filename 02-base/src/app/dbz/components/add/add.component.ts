import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-add-character',
    templateUrl: './add.component.html',
    styleUrl: './add.component.css',
})
export class AddComponent { 
    character:Character = {
        name:'',
        power:0
    }

    emitCharacter():void{

    }

}
