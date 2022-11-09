import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  hayError:boolean = false;
  termino: string= '';
  paises:Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias = false;


  constructor(private paisService:PaisService) { }

  buscar( termino:string ){
    this.hayError = false;
    this.termino = termino; //Termino pasa a ser el termino argumento.
    this.mostrarSugerencias = false;
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (paises) =>{  
        console.log(paises);
        this.paises = paises;
      },
      error: (e)=>{ this.hayError = true; this.paises = [];},
      complete: ()=>{ console.log("completado buscarPais"); }
    })
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais( termino )
    .subscribe({
      next: (paises)=> this.paisesSugeridos = paises.splice(0, 4),
      error: (err)=> this.paisesSugeridos = []
    })
  }

  buscarSugerido(termino:string){
    this.mostrarSugerencias = false;
    this.buscar(termino);
  }
}

