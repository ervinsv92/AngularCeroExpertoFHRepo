import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
    selector: 'gifs-card',
    templateUrl: './Card.component.html'
})
export class CardComponent implements OnInit{

    @Input()
    public gif!:Gif;

    ngOnInit(): void {
        if(!this.gif) throw new Error('Gif property is required')
    }
 }
