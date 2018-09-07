import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routedComponents, ROUTES_APP } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    routedComponents

  ],
  imports: [
    BrowserModule,
    ROUTES_APP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
