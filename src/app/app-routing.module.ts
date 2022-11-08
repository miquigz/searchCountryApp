import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorLenguajeComponent } from './pais/pages/por-lenguaje/por-lenguaje.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { PorMonedaComponent } from './pais/por-moneda/por-moneda.component';

const routes:Routes = [
    {
        path:'',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path:'capital',
        component:PorCapitalComponent
    },
    {
        path:'lenguaje',
        component: PorLenguajeComponent
    },
    {
        path:'moneda',
        component: PorMonedaComponent
    },
    {
        path:'pais/:id',
        component: VerPaisComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
        imports:[
            RouterModule.forRoot(routes)
        ],
        exports:[
            RouterModule
        ]
})
export class AppRoutingModule {}