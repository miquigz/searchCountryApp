import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {tap} from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {


  pais!: Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private paisService:PaisService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      tap(console.log)
    )
    .subscribe({
      next: ({id})=>{
        console.log(id);
        this.paisService.getPaisAlphaCode(id)
        .subscribe({
          next: (pais:any)=>{
            this.pais = pais[0];
            console.log(this.pais);
          },
          error: (err)=> console.log('error in getPaisAlphaCode Subscribe', err)
        })
      },
      error: (err)=> console.log('error in activatedRouteParams', err)
    })
  }
}
