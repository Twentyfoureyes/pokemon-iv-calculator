import {Routes, RouterModule} from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const pokemonIvCalculatorAppRoutes: Routes = [
    { path: '', component: PokemonListComponent }
];

export const routing = RouterModule.forRoot(pokemonIvCalculatorAppRoutes);