import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Pokemon} from '../models/pokemon';

@Pipe({
    name: 'pokemonFilter'
})
@Injectable()
export class PokemonFilter implements PipeTransform {
    transform(pokemons: Pokemon[], args: any[]): any {
        if (!pokemons || pokemons.length <= 0) {
            return;
        }
        return pokemons.filter(pokemon => {
            if (!args[0] || args[0] === '')
                return true;
            return pokemon.name.toLowerCase().indexOf(args[0].toLowerCase()) >= 0;
        }).sort((a, b) => { return (a[args[1]] < b[args[1]]) ? 1 : ((b[args[1]] < a[args[1]]) ? -1 : 0); });
    }
}