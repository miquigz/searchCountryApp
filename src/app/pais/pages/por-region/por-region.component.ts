import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html'
})
export class PorRegionComponent{

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActiva: string = '';
  paises:Country[] = []

  constructor(private paisService:PaisService) { }

  activarRegion( region:string ){
    if (this.regionActiva !== region){
      this.regionActiva = region;
      this.buscarRegion(this.regionActiva);
    }
  }

  buscarRegion(region:string){
    this.paisService.buscarPaisRegion(region)
    .subscribe({
      next: (regiones) => {
        this.paises = regiones;
      },
      error: (err) =>{ 
        console.log("error en buscarRegion", err); return [];
      }
    })
  }

}
