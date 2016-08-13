import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { API_ENDPOINT } from './app.tokens';

@Injectable()
export class PokemonService {
    constructor(private http: Http, @Inject(API_ENDPOINT) private apiEndpoint) {}

    getInventory() {
        return this.http.get(`${this.apiEndpoint}/get-inventory`);
    }

    login(username, password, provider) {
        return this.http.post(`${this.apiEndpoint}/login`, {username: username, password: password, provider: provider});
    }

    setLoggedIn(loggedIn) {
        (<any>sessionStorage).loggedIn = loggedIn;
    }
    
    getLoggedIn() {
        return (<any>sessionStorage).loggedIn;
    }
}
