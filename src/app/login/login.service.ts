import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/app'

@Injectable()

export class LoginService{
  token: string | null;

  constructor(private router: Router){

  }

  login(email:string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
    // devuelve una promersa
    .then(
      response => {
        firebase.auth().currentUser?.getIdToken().then(
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
