import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { CharacterComponent } from './character/character.component';
import { SpeciesComponent } from './species/species.component';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

const config = {
  clientId: '{client-id}',
  issuer: 'https://{client-subdomain}.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/login/callback'
}
const oktaAuth = new OktaAuth(config);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BrowseComponent,
    CharacterComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: { oktaAuth }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
