import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/service/auth.service";
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  userEmail: any;
    constructor(
      public authService: AuthService
    ) { }
    ngOnInit() { }
}
