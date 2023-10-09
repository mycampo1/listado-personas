import { Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {
  personasArray: Persona[] = [
    new Persona("juan", "perez"),
    new Persona("Laura", "Juarez")
  ];

  constructor(private loggingService: LoggingService){}

  agregarPersona(persona: Persona){
    this.loggingService.enviaMensajeAConsola("agregamos a la persona" + persona.nombre)
    this.personasArray.push( persona )
    }

}
