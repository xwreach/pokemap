import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {provideAuth, getAuth} from '@angular/fire/auth'
import {provideFirestore, getFirestore} from '@angular/fire/firestore'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp( () =>initializeApp({
      apiKey: "AIzaSyC0oKBEl39UcGjxACK_IJUqErb2ZGWQS1Y",
      authDomain: "pokemap-1d84d.firebaseapp.com",
      projectId: "pokemap-1d84d",
      storageBucket: "pokemap-1d84d.appspot.com",
      messagingSenderId: "61804635847",
      appId: "1:61804635847:web:fe704a8dc041b5f8f880e2"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}