import { Component, OnInit, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../models/pokemon';

@Component({
    moduleId: module.id,
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class PokemonListComponent implements OnInit {
    pokemons: Observable<Array<Pokemon>>;

    constructor(private pokemonService: PokemonService, private router: Router) {
        const loggedIn = this.pokemonService.getLoggedIn();
        if(loggedIn === false) {
            this.goToLogin();
        }
     }

    ngOnInit() {
        this.pokemonService.getInventory().map(response => response.json()).subscribe(p => this.pokemons = this.convertToPokemon(p));
    }

    goToLogin() {
        this.router.navigate(['/']);
    }

    logout() {
        sessionStorage.removeItem('loggedIn');
        this.router.navigate(['/']);
    }

    convertToPokemon(pokemons) {
        return pokemons.pokemon.map(p => new Pokemon(p.pokemon_id, p.cp, p.individual_stamina, p.individual_defense, p.individual_attack, p.cp_multiplier, p.additional_cp_multiplier));
    }
}