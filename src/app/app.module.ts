import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrabhavComponent } from './prabhav/prabhav.component';
import { PratikComponent } from './pratik/pratik.component';
import { RupeshComponent } from './rupesh/rupesh.component';
import { PrathmeshComponent } from './prathmesh/prathmesh.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrabhavComponent,
    PratikComponent,
    RupeshComponent,
    PrathmeshComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
