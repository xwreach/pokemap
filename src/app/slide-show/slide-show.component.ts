import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrl: './slide-show.component.css'
})
export class SlideShowComponent implements OnInit {
  Title !: string;
  Description !: string;
  ImageURL !: string;

  ngOnInit(){
    this.Title = 'Région';
    this.Description = 'Histoire de la région';
    this.ImageURL = 'https://images.shoutwiki.com/pokemmo/e/e8/Map_Kanto.png';
  }
}
