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

  public getPkmn(pkmnID:number){
    this.apiService.getPokemon(pkmnID).subscribe(a => {
      console.log(a)
    })
  }

  public getRandomInt(min:number, max:number) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
}

