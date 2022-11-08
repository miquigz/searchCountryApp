import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent{
  hayError:boolean = false;
  termino: string= '';
  paises:Country[] = [];

  constructor(private paisService:PaisService) { }

  buscar( termino:string ){
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPaisRegion(this.termino)
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
