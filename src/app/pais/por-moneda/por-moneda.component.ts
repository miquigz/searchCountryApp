import { Component } from '@angular/core';
import { Country } from '../interfaces/pais.interface';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-por-moneda',
  templateUrl: './por-moneda.component.html'
})
export class PorMonedaComponent {

  hayError:boolean = false;
  termino: string= '';
  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar( termino:string ){
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPaisMoneda(this.termino)
    .subscribe({
      next: (paises) =>{  
        console.log(paises);
        this.paises = paises;
      },
      error: (e)=>{ this.hayError = true; this.paises = [];},
      complete: ()=>{ console.log("completado buscarPais"); }
    })
  }

}
