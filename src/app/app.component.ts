import { Component } from '@angular/core';
import { environment } from "../environments/environment";
import { RouterModule } from "@angular/router";
import * as firebase from "firebase";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kardex';

  constructor(){
    if (!firebase.apps.length) {
      firebase.initializeApp(environment.firebase);
    }
  }
}

