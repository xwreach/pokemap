import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-banniere-haute',
  templateUrl: './banniere-haute.component.html',
  styleUrl: './banniere-haute.component.css'
})
export class BanniereHauteComponent {
  Title !: string;
  ngOnInit(){
    this.Title = 'Pokémap';
  }
}
