import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor (private AFauth : AngularFireAuth){ }

  login(){
    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    
      if (errorCode === 'auth/operation-not-allowed') {
        alert('You must enable Anonymous auth in the Firebase Console.');
      } else {
        console.error(error);
      }
    });

   firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log('Logueado')
      } else {
        console.log('No esta logueado')
      }
    });
  }

} 
