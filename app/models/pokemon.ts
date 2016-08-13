import {POKEMONS} from './pokemons';
import {CalculateCP} from '../api/calculation';

export class Pokemon {
    public pokemon_id: number;
    public cp: number;

    public individual_stamina: number;
    public individual_defense: number;
    public individual_attack: number;

    public cp_multiplier: number;
    public additional_cp_multiplier: number;

    public name: string;
    public type: string;

    public height: string;
    public weight: string;

    public candy: string;
    public egg: string;

    public img: string;
    public percentage: number;

    public percentMaxCP: number;
    public percentMaxIV: number;

    constructor(pokemon_id: number, cp: number, stam: number, def: number, att: number, cp_multiplier: number, additional_cp_multiplier: number) {
        this.pokemon_id = pokemon_id;
        this.cp = cp;
        this.individual_stamina = stam;
        this.individual_defense = def;
        this.individual_attack = att;
        this.cp_multiplier = cp_multiplier;
        this.additional_cp_multiplier = additional_cp_multiplier;

        const calculations = new CalculateCP({
            pokemon_id: this.pokemon_id,
            individual_attack: this.individual_attack,
            individual_defense: this.individual_defense,
            individual_stamina: this.individual_stamina,
            cp_multiplier: this.cp_multiplier,
            additional_cp_multiplier: this.additional_cp_multiplier
        }).calculate();

        this.percentMaxCP = Math.floor(((calculations.currCP - calculations.minCP) / (calculations.maxCP - calculations.minCP)) * 100);
        this.percentMaxIV = Math.floor(((this.individual_attack || 0) + (this.individual_defense || 0) + (this.individual_stamina || 0)) / 45);

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