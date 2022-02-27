import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { CharacterComponent } from './character/character.component';
import { SpeciesComponent } from './species/species.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'browse',
    component: BrowseComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'character',
    component: CharacterComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'species',
    component: SpeciesComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
