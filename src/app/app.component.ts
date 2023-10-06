import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  titulo = 'Listado de personas';

  personasArray: Persona[] = [
    new Persona("juan", "perez"),
    new Persona("Laura", "Juarez")
  ];

  nombreInput:string = '';
  apellidoInput:string = '';

  agregarPersona() {

    let persona1 = new Persona(this.nombreInput,this.apellidoInput);
    this.personasArray.push(persona1);
    /*
    this.personasArray.push(new Persona(this.nombreInput, this.apellidoInput));
    this.nombreInput = '';
    this.apellidoInput = '';
    */
  }
}
