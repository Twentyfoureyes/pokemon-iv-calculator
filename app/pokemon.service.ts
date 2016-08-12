import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { API_ENDPOINT } from './app.tokens';

@Injectable()
export class PokemonService {
    constructor(private http: Http, @Inject(API_ENDPOINT) private apiEndpoint) {}

    getInventory() {
        return this.http.get(`${this.apiEndpoint}/get-inventory`);
    }
}
