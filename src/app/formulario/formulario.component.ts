import { Component, ElementRef, /*EventEmitter, Output*/ ViewChild } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  //@Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput: string = '';
  //apellidoInput: string = '';


  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  constructor(/*private loggingService: LoggingService,*/
              private personasService: PersonasService){
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El indice es: " + indice)
                );
              }

  onAgregarPersona() {

    let persona1 = new Persona(
    this.nombreInput.nativeElement.value,
    this.apellidoInput.nativeElement.value);

    //this.loggingService.enviaMensajeAConsola("Enviamos a persona con nombre: "+ persona1.nombre + " Apellido: " + persona1.apellido);

    //this.personasArray.push(persona1); ya no se tiene acceso
    //this.personaCreada.emit(persona1);


    /*
    this.personasArray.push(new Persona(this.nombreInput, this.apellidoInput));
    this.nombreInput = '';
    this.apellidoInput = '';
    */

    this.personasService.agregarPersona(persona1);

  }
}
