import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Persona } from './persona.model';

@Injectable()

export class DataService{

  constructor(private httpClient: HttpClient){

    //guardar personas
    guardarPersonas(personas: Persona[]){
      this.httpClient.post('https://listado-personas-d41ad-default-rtdb.firebaseio.com/datos.json', personas);
      .subscribe(
        response => {
          console.log('Resultado guardar personas: ' + response);
          error => console.log('Error al guardar personas: ' + error);

        },


      )

    }

  }
}
