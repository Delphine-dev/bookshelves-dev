import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyARKmPWq4gegPM_P_2Pa_6N7-WV4t6i3Wo",
      authDomain: "bookshelves-2d509.firebaseapp.com",
      databaseURL: "https://bookshelves-2d509.firebaseio.com",
      projectId: "bookshelves-2d509",
      storageBucket: "bookshelves-2d509.appspot.com",
      messagingSenderId: "800321222124",
      appId: "1:800321222124:web:97b594988182d8bde77cc9",
      measurementId: "G-DZ8PLV6P0V"
    };
    firebase.initializeApp(config);
    firebase.analytics();
  }
}
