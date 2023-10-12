import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  titulo = 'Listado de personas';

  ngOnInit(): void {
    firebase.default.initializeApp({
      apiKey: "AIzaSyAWBNzHmGtcwG4khDHJzkgsA-jkLLPpjpg",
      authDomain: "listado-personas-d41ad.firebaseapp.com",
    })
  }
}
