import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasquesListComponent } from './components/Masques-list/Masques-list.component';
import { MasquesDetailsComponent } from './components/Masques-details/Masques-details.component';
import { MasquesCreateComponent } from './components/Masques-create/Masques-create.component';
import { HomeComponent } from './home/home.component';
import { AttestationsCreateComponent } from './components/attestations-create/Attestations-create.component';
import { AttestationsDetailsComponent } from './components/Attestations-details/Attestations-details.component';
import { AttestationsListComponent } from './components/Attestations-list/Attestations-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'Masques', pathMatch: 'full' },
  { path: 'Masques', component: MasquesListComponent },
  { path: 'Masques/home', component: HomeComponent },
  { path: 'Masques/:id', component: MasquesDetailsComponent },
  { path: 'create', component: MasquesCreateComponent },
  { path: 'Attestations', component: AttestationsListComponent },
  { path: 'Attestations/home', component: HomeComponent },
  { path: 'Attestations/:id', component: AttestationsDetailsComponent },
  { path: 'create', component: AttestationsCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
