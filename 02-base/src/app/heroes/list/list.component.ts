import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  heroNames:string[] = ['Thor', 'Spiderman', 'Hulk', 'Iron Man'];
  deletedHero?:string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
