import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }        from './app.routes';
import { AppComponent }  from './app.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import { CredentialsComponent} from './credentials/credentials.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, CredentialsComponent, PokemonListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
