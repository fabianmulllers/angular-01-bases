import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})

export class AgregarComponent {
  
  @Input() nuevo: Personaje ={
    nombre:'',
    poder:0
  };

  // @Output() onNewCaracter: EventEmitter<Personaje> = new EventEmitter<Personaje>();

  constructor(private dbzService: DbzService){}

  agregar(): void{
    this.nuevo.nombre = this.nuevo.nombre.trim();
    if(this.nuevo.nombre.length < 1){return;}

    // this.onNewCaracter.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo ={
      nombre: '',
      poder: 0
    }
  }
  
}
