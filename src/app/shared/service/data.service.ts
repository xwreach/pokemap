import { Injectable } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath='/pokemon';
  pkmnRef: AngularFirestoreCollection<Pokemon>;

constructor(private db: AngularFirestore) {
  this.pkmnRef = db.collection(this.dbPath);
}

getAllPkmn():AngularFirestoreCollection<Pokemon>{
  return this.pkmnRef;
}

addPkmn(pkmn: Pokemon): any{
  return this.pkmnRef.add({...pkmn});
}
}
