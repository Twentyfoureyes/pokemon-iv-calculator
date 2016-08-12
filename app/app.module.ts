import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }        from './app.routes';
import { AppComponent }  from './app.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, PokemonListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
