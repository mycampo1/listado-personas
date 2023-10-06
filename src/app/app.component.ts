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

  personaAgregada(persona: Persona){
    this.personasArray.push( persona )
  }
}
