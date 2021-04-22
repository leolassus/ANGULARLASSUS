import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasquesCreateComponent } from './components/Masques-create/Masques-create.component';
import { MasquesDetailsComponent } from './components/Masques-details/Masques-details.component';
import { MasquesListComponent } from './components/Masques-list/Masques-list.component';
import { HomeComponent } from './home/home.component';
import { AttestationsCreateComponent } from './components/attestations-create/Attestations-create.component';
import { AttestationsDetailsComponent } from './components/Attestations-details/Attestations-details.component';
import { AttestationsListComponent } from './components/Attestations-list/Attestations-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MasquesCreateComponent,
    MasquesDetailsComponent,
    MasquesListComponent,
    HomeComponent,
    AttestationsCreateComponent,
    AttestationsDetailsComponent,
    AttestationsListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
