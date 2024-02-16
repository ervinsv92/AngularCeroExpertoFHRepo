import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent { 
    @Input()
    characterList:Character[] = [
        {name:'Trunks', power: 10}
    ];

    @Output()
    public onDelete:EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id:string):void{
        //Todo: emitir id del character
        //console.log(index)
        this.onDelete.emit(id);
    }
}
