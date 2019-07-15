import { Component } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mokh';
  etatone='good';
  constructor() {
    const config = {
      /*
      //id Client : 1081533521767-to1g8fkfsf0r4n13kac1snbno05gerfh.apps.googleusercontent.com
      //code secret client: JLwwQi18OPafnS-38WGnLjZ7
      //AIzaSyBSP_Ny-rvniQskv0XegG7c3OkiDgagDdQ
      apiKey: "AIzaSyBSP_Ny-rvniQskv0XegG7c3OkiDgagDdQ",
//      apiKey: "AIzaSyBgKN161NcloScaNa1agbCJctlmdxTqQVg",
      authDomain: "stage-mokh.firebaseapp.com",
      databaseURL: "https://stage-mokh.firebaseio.com",
      projectId: "stage-mokh-246213",
      storageBucket: "stage-mokh.appspot.com",
      messagingSenderId: "1081533521767"
      */
     apiKey: "AIzaSyAi5nUktCdWaLsejLXWOVJwkXUj4sipFzE",
  authDomain: "stage-mokh.firebaseapp.com",
  databaseURL: "https://stage-mokh.firebaseio.com",
  projectId: "stage-mokh",
  storageBucket: "",
  messagingSenderId: "515133046937",
  appId: "1:515133046937:web:a77169bacbf1923b"
        };
    firebase.initializeApp(config);
  }
}