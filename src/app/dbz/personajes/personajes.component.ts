import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {
  
  constructor(private DbzService: DbzService){

  }

  get personajes(){
    return this.DbzService.personajes;
  }

  // @Input() personajes: Personaje[] = [];

}
