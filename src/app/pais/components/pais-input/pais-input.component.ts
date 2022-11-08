import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {Subject, debounceTime} from 'rxjs';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder:string = '';

  debouncer: Subject<string> = new Subject();

  termino:string = '';

  constructor() { }

  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( value =>{
      this.onDebounce.emit( value );
    })
  }

  teclaPresionada(event:any){
    this.debouncer.next(event.target.value);
    //this.debouncer.next(this.termino);
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

}
