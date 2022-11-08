import { Component} from '@angular/core';
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

  constructor(private paisService:PaisService) { }

  buscar(){
    this.hayError = false;
    
    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (response) =>{ 
        console.log(response);
      },
      error: (e)=>{
        console.log(e);
        this.hayError = true;
      },
      complete: ()=>{
        console.log("completado");
      }
    })
  }



}
