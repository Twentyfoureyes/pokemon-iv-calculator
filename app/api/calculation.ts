import {BASE_STATS} from './baseStats';

export class ConvertIV {
    private baseStamina;
    private baseAttack;
    private baseDefense;

    constructor(private id, private stam, private atk, private def, private multiplier) { }

    convert() {
        const f = BASE_STATS.find((b) => b.id === this.id);
        this.baseStamina = f.BaseStamina;
        this.baseAttack = f.BaseAttack;
        this.baseDefense = f.BaseDefense;

        const stamina = (this.baseStamina + (this.stam || 0)) * this.multiplier;
        const attack = (this.baseAttack + (this.atk || 0)) * this.multiplier;
        const defense = (this.baseDefense + (this.def || 0)) * this.multiplier;
        return Math.floor(Math.pow(stamina, 0.5) * attack * Math.pow(defense, 0.5) / 10);
    }
}

export class CalculateCP {
    private pokemon_id;
    private individual_attack;
    private individual_defense;
    private individual_stamina;
    private cp_multiplier;
    private additional_cp_multiplier;

    constructor(private info) {
        this.pokemon_id = info.pokemon_id;
        this.individual_attack = info.individual_attack;
        this.individual_defense = info.individual_defense;
        this.individual_stamina = info.individual_stamina;
        this.cp_multiplier = info.cp_multiplier;
        this.additional_cp_multiplier = info.additional_cp_multiplier;
    }

    calculate() {
        const multiplier = this.cp_multiplier + (this.additional_cp_multiplier || 0);

        return {
            minCP: new ConvertIV(this.pokemon_id, 0, 0, 0, multiplier).convert(),
            currCP: new ConvertIV(this.pokemon_id, this.individual_stamina, this.individual_attack, this.individual_defense, multiplier).convert(),
            maxCP: new ConvertIV(this.pokemon_id, 15, 15, 15, multiplier).convert(),
        };
    }
}