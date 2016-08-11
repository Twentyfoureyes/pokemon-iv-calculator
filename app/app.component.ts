import { Component } from '@angular/core';
import Pokemon from 'Pokemon';

@Component({
  selector: 'pokemon-iv-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    Pokemon.getInventory();
  }
 }