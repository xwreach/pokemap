import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/service/auth.service';
import { publishFacade } from '@angular/compiler';
import { APIService } from '../../shared/service/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public PokemonId:number = 1;
  constructor(
    public authService: AuthService,
    public apiService: APIService
    ) {}
  ngOnInit(): void {}

  public getPkmn(){
    this.apiService.getPokemon(this.PokemonId).subscribe(a => {
      console.log(a)
    })
  }
  
}