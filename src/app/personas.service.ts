import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasService {
  personasArray: Persona[] = [
    new Persona("juan", "perez"),
    new Persona("Laura", "Juarez")
  ];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService){}

  agregarPersona(persona: Persona){
    this.loggingService.enviaMensajeAConsola("agregamos a la persona" + persona.nombre)
    this.personasArray.push( persona )
    }

    encontrarPersona(index: number){
      let persona: Persona = this.personasArray[index];
      return persona;
    }

  modificarPersona(index:number, persona:Persona){
    let persona1 = this.personasArray[index]
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
  }

  eliminarPersona(index: number){
    this.personasArray.splice(index,1);
  }

}
