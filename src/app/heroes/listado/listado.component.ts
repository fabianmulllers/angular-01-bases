import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {
  heroes: string[] = ['spiderman','thor','batman','superman'];
  heroesBorrados: string[] = [];

  borrarHeroe = (id: number):void => { 
    this.heroesBorrados.push(this.heroes[id]);
    this.heroes.splice(id,1); 
  }
}
