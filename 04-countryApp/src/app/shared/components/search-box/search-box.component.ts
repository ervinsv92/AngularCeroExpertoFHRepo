import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject,Subscription } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit, OnDestroy{
  
  private debouncer:Subject<string> =new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Output() 
  public onValue = new EventEmitter<string>();

  @Output() 
  public onDebounce = new EventEmitter<string>();

  @Input()
  public placeholder:string = '';

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)//Es una espera antes de emitir el valor, cada vez que se emite un valor se resetea la espera
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();//del debouncer hay que desuscribirse, porque aunque el componente no existe, el debounce quedaria por debajo realientizando la app
    //en los subscribe de http, no hay que hacer esto, porque ya se hace automaticamente
  }

  emitValue(value:string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }
}
