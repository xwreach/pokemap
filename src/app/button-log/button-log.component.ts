import { Component,inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-button-log',
  templateUrl: './button-log.component.html',
  styleUrl: './button-log.component.css',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
 
})
export class ButtonLogComponent {
  private auth: Auth = inject(Auth);  
}
