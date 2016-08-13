import { Component, Inject } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PokemonService } from '../pokemon.service';

@Component({
    moduleId: module.id,
    selector: 'credentials',
    templateUrl: './credentials.component.html',
    styleUrls: ['./credentials.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class CredentialsComponent {
    private username;
    private password;
    private provider;
    private providers = ['google', 'ptc'];

    constructor(private pokemonService: PokemonService, private router: Router) {
        if (this.pokemonService.getLoggedIn()) {
            this.goToInventory();
        }
    }

    login() {
        this.pokemonService.login(this.username, this.password, this.provider)
            .subscribe(() => {
                this.pokemonService.setLoggedIn(true);
                this.goToInventory()
            });
    }

    goToInventory() {
        this.router.navigate(['/inventory']);
    }
}