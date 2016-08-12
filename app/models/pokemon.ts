import {POKEMONS} from './pokemons';

export class Pokemon {
    public pokemon_id: number;
    public cp: number;

    public individual_stamina: number;
    public individual_defense: number;
    public individual_attack: number;

    public name: string;
    public type: string;

    public height: string;
    public weight: string;

    public candy: string;
    public egg: string;

    public img: string;

    constructor(pokemon_id: number, cp: number, stam: number, def: number, att: number) {
        this.pokemon_id = pokemon_id;
        this.cp = cp;
        this.individual_stamina = stam;
        this.individual_defense = def;
        this.individual_attack = att;

        <any>POKEMONS
            .filter(p => p.id === String(this.pokemon_id))
            .map(pokemonData => {
                this.name = pokemonData.name;
                this.type = pokemonData.type;
                this.height = pokemonData.height;
                this.weight = pokemonData.weight;
                this.candy = pokemonData.candy;
                this.egg = pokemonData.egg;
                this.img = pokemonData.img;
            });
    }
}