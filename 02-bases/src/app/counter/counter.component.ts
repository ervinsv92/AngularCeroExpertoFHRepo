import { Component } from "@angular/core";

@Component({
    selector:'app-counter',
    standalone: true,
    template:`<p>Counter: {{counter}}</p>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">Reset</button>`
})
export class CounterComponent{
    counter = 0;

    increaseBy(value:number):void{
      this.counter +=value;
    }
  
    reset():void{
      this.counter = 10;
    }
}