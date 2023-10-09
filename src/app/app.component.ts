import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  titulo = 'Listado de personas';

  personasArray: Persona[] = [];

  constructor(private loggingService: LoggingService,
              private personasService: PersonasService){

  }
  ngOnInit(): void {
    this.personasArray = this.personasService.personasArray;
  }

  /*personaAgregada(persona: Persona){
    //this.personasArray.push( persona )
    //this.loggingService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona: " + persona.nombre);

    this.personasService.agregarPersona(persona)

  }*/
}
