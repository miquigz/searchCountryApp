import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-moneda',
  templateUrl: './por-moneda.component.html'
})
export class PorMonedaComponent {

  hayError:boolean = false;
  termino: string= '';
  paises:Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias = true;

  constructor(private paisService:PaisService) { }

  buscar( termino:any ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
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

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais( termino )
    .subscribe({
      next: (paises)=>{ 
        let auxPaises:Country[] = paises;
        auxPaises.forEach( (ele)=>{
          if (ele.currencies){
            ele.currencies = (Object.values(ele.currencies)[0].name).toLowerCase();
          }
        })
        this.paisesSugeridos = auxPaises.splice(0, 4);
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
