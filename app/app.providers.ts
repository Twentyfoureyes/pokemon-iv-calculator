import { PokemonService } from './pokemon.service';
import { API_ENDPOINT } from './app.tokens';

export const APP_PROVIDERS = [
    PokemonService,
    { provide: API_ENDPOINT, useValue: 'http://localhost:3000' }
];