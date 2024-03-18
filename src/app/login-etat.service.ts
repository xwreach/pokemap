import { Injectable } from '@angular/core';
import { getAuth, onAuthStateChanged } from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginEtatService {

  constructor() { }
  public Etat(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
    });
  }
}
