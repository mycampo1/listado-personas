import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';
import { LoginService } from './login/login.service';

@Injectable()

export class DataService{

  constructor(private httpClient: HttpClient,
              private loginService: LoginService
    ){}

  cargarPersonas(){
    const token = this.loginService.getIdToken();
    return this.httpClient.get('https://listado-personas-d41ad-default-rtdb.firebaseio.com/datos.json?auth='+token);
  }

  //guardar personas
  guardarPersonas(personas: Persona[]){
    this.httpClient.put('https://listado-personas-d41ad-default-rtdb.firebaseio.com/datos.json', personas)
    .subscribe(
      response => console.log('Resultado guardar personas: ' + response),
      error => console.log('Error al guardar personas: ' + error)
    );
  }

  modificarPersona(index: number, persona: Persona){
    let url: string;
    url = 'https://listado-personas-d41ad-default-rtdb.firebaseio.com/datos/'+ index + '.json';
    this.httpClient.put(url, persona)
    .subscribe(
      response => console.log("Resultado modificar persona"+response),
      error => console.log("Error al modificar Persona"+ error)
    )
  }

  eliminarPersona(index:number){
    let url: string;
    url = 'https://listado-personas-d41ad-default-rtdb.firebaseio.com/datos/'+ index + '.json';
    this.httpClient.delete(url)
    .subscribe(
      response => console.log("Resultado eliminar persona"+response),
      error => console.log("Error al eliminar Persona"+ error)
    )
  }


}
