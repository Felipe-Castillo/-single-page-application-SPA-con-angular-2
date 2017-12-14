import { Component } from '@angular/core';
import { Router } from  '@angular/router';
import {HeroesService} from '../../../servicios/heroes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',

})
export class NavbarComponent {
  title = 'app';
  constructor( 
               private router:Router
  )
  {
  //  console.log("constructor");
   }


  buscarheroe(busqueda:string)
  {
    this.router.navigate(['/search',busqueda]);
  }
}
