import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
        <h1>{{ titulo }}</h1>
        <h1>La bases es : {{base}}</h1>

        <button (click)="acumular(base)" > + {{ base }} </button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-base)"> - {{ base }}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 1; 

    // sumar = (): number => ( this.numero += this.numero);
    sumar(){
        this.numero += 1;
    }

    restar = (): number => (this.numero --);

    acumular = (valor: number): number => {
        return this.numero += valor ;
    };

}