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
  paisesSugeridos: Country[] = [];
  mostrarSugerencias = true;

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

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPaisLanguage( termino )
    .subscribe({
      next: (paises)=>{ 
        let auxPaises:Country[] = paises;
        auxPaises.forEach( (ele)=>{
          if (ele.languages){
            ele.languages = (Object.values(ele.languages)[0]);
          }
        })
        console.log(auxPaises);
        this.paisesSugeridos = auxPaises.splice(0, 1);
      },
      error: (err)=> this.paisesSugeridos = []
    })
  }

  buscarSugerido(termino:string){
    this.mostrarSugerencias = false;
    this.termino = termino;
    this.buscar(termino);
  }
}
