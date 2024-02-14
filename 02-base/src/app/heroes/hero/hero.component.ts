import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = 'iron Man';
  public age:number = 35;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{
    this.name = "Spiderman";
  }

  changeAge():void{
    this.age = 31;
  }

  resetForm():void{
    this.name = 'iron man';
    this.age = 35;
  }
}
