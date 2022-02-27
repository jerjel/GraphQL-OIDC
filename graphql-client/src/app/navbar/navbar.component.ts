import { Component } from '@angular/core';
import { OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  constructor(public authStateService: OktaAuthStateService, private oktaAuth: OktaAuth) {}

  async login() {
    await this.oktaAuth.signInWithRedirect();
  }

  async logout() {
    await this.oktaAuth.signOut();
  }

}