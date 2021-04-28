import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerComponent } from './pages/beer/beer.component';
import { SecretComponent } from './pages/secret/secret.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
