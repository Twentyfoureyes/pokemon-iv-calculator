import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
    moduleId: module.id,
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.html',
    directives: [ROUTER_DIRECTIVES]
})
export class PokemonListComponent implements OnInit {
    pokemons: Observable<Array<Pokemon>>;

    constructor(private pokemonService: PokemonService) { }

    ngOnInit() {
        this.pokemonService.getInventory().map(response => response.json()).subscribe(p => this.pokemons = this.convertToPokemon(p));
    }

    convertToPokemon(pokemons) {
        return pokemons.pokemon.map(p => new Pokemon(p.pokemon_id, p.cp, p.individual_stamina, p.individual_defense, p.individual_attack));
    }
}