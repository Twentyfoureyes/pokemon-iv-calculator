import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PokemonService } from '../pokemon.service';

@Component({
    moduleId: module.id,
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.html',
    directives: [ROUTER_DIRECTIVES]
})
export class PokemonListComponent implements OnInit {

    // contacts: Observable<Array<Contact>>;

    constructor(private pokemonService: PokemonService) {}

    ngOnInit() {
        this.pokemonService.getInventory();
        // this.contacts = this.contactsService.getContacts();
    }
}