import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";
import { DataService } from "./data.service";

@Injectable()
export class PersonasService {
  personasArray: Persona[] = [];

  saludar = new EventEmitter<number>();

  constructor(private loggingService: LoggingService,
              private dataService: DataService
    ){}

  setPersonas(personas: Persona[]){
    this.personasArray = personas;
  }

  obtenerPersonas(){
    return this.dataService.cargarPersonas();
  }

  agregarPersona(persona: Persona){
    this.loggingService.enviaMensajeAConsola("agregamos a la persona" + persona.nombre);
    if(this.personasArray == null){
      this.personasArray = [];
    }
    this.personasArray.push( persona )
    this.dataService.guardarPersonas(this.personasArray)
    }

    encontrarPersona(index: number){
      let persona: Persona = this.personasArray[index];
      return persona;
    }

  modificarPersona(index:number, persona:Persona){
    let persona1 = this.personasArray[index]
    persona1.nombre = persona.nombre;
    persona1.apellido = persona.apellido;
    this.dataService.modificarPersona(index, persona);
  }

  eliminarPersona(index: number){
    this.personasArray.splice(index,1);
    this.dataService.eliminarPersona(index);
    //se vuelve a guardar el arreglo para regenerar los indices en la bd
    this.modificarPersonas();
  }

  modificarPersonas(){
    if(this.personasArray != null){
      this.dataService.guardarPersonas(this.personasArray)
    }
  }

}
