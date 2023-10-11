import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonasService } from './personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  titulo = 'Listado de personas';



  /*personaAgregada(persona: Persona){
    //this.personasArray.push( persona )
    //this.loggingService.enviaMensajeAConsola("Agregamos al arreglo la nueva persona: " + persona.nombre);

    this.personasService.agregarPersona(persona)

  }*/
}
