import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

@Injectable()

export class LoginService{
  token: string | null;

  constructor(private router: Router){

  }

  login(email:string, password: string){
    // Iniciar sesión con Firebase
    signInWithEmailAndPassword(getAuth(), email, password)
    // devuelve una promersa
    .then(
      response => {
        // Obtener el token ID del usuario actual
        response.user.getIdToken().then(
          token => {
            console.log(token);
            this.token = token;
            this.router.navigate(['/']);
          }
        )
      }
    )
  }

  getIdToken(){
    return this.token;
  }

}
