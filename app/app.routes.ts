import {Routes, RouterModule} from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CredentialsComponent} from './credentials/credentials.component';

const pokemonIvCalculatorAppRoutes: Routes = [
    { path: '', component: CredentialsComponent },
    { path: 'inventory', component: PokemonListComponent }
];

export const routing = RouterModule.forRoot(pokemonIvCalculatorAppRoutes);