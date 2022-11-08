import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],exports:[
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    // AppRoutingModule,
    RouterModule
  ]
})
export class SharedModule { }
