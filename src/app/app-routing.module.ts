import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonLogComponent } from './button-log/button-log.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'button-log', component: ButtonLogComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
