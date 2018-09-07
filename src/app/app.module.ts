import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HeaderComponent } from "./components/shared/header/header.component";

import { AutenticacionService } from "./services/autenticacion.service";

import { routedComponents, ROUTES_APP } from "./routes";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ROUTES_APP,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [
    AutenticacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }