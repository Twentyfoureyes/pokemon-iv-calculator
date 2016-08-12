import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {APP_PROVIDERS} from "./app.providers";
import {HTTP_PROVIDERS} from '@angular/http';

@Component({
    selector: 'pokemon-iv-app',
    templateUrl: './app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [
        APP_PROVIDERS, HTTP_PROVIDERS
    ]
})
export class AppComponent {
    constructor() {}
}