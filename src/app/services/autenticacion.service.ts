import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { auth } from "firebase";

@Injectable()
export class AutenticacionService{

  authState:any=null;

  constructor( private router:Router) { 
  }


  login(correo, contrasena){
    return auth().signInWithEmailAndPassword(correo, contrasena)
  }

  singOut() {
    return auth().signOut().then(data=>{
      return data;
    }).catch(error=>{
      return error;
    });
  }

  getSession(){
    return new Promise((resolved, reject)=>{
      resolved(auth().currentUser);
    });
  }

    
}
