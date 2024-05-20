import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.page.html',
  styleUrls: ['./detail-pokemon.page.scss'],
})
export class DetailPokemonPage {

  public pokemon: Pokemon;

  constructor(
    private navParams: NavParams,
    private navController: NavController
  ) {
    // Recogemos el pokemon del navParams
    this.pokemon = this.navParams.data["pokemon"];
  }

  goBack(){
    // Volvemos a list-pokemons
    this.navController.pop();
  }

}
