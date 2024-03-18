import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"pokemap-1d84d","appId":"1:61804635847:web:fe704a8dc041b5f8f880e2","storageBucket":"pokemap-1d84d.appspot.com","apiKey":"AIzaSyC0oKBEl39UcGjxACK_IJUqErb2ZGWQS1Y","authDomain":"pokemap-1d84d.firebaseapp.com","messagingSenderId":"61804635847"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
