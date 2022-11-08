import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-lenguaje',
  templateUrl: './por-lenguaje.component.html'
})
export class PorLenguajeComponent {

  hayError:boolean = false;
  termino: string= '';
  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar( termino:string ){
    this.hayError = false;
    this.termino = termino; //Termino pasa a ser el termino argumento.
    
    this.paisService.buscarPaisLanguage(this.termino)
    .subscribe({
      next: (paises) =>{  
        console.log(paises);
        this.paises = paises;
      },
      error: (e)=>{ this.hayError = true; this.paises = [];},
      complete: ()=>{ console.log("completado buscarPais lenguaje"); }
    })
  }

}
