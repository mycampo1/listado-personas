import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput: string = '';
  //apellidoInput: string = '';


  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;

  agregarPersona() {

    let persona1 = new Persona(
      this.nombreInput.nativeElement.value,
      this.apellidoInput.nativeElement.value);
    //this.personasArray.push(persona1); ya no se tiene acceso
    this.personaCreada.emit(persona1);
    /*
    this.personasArray.push(new Persona(this.nombreInput, this.apellidoInput));
    this.nombreInput = '';
    this.apellidoInput = '';
    */
  }
}
