import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HeaderComponent } from "./components/shared/header/header.component";
import { FooterComponent } from './components/footer/footer.component';

//Panel de administracion
import { PanelLoginComponent }          from "./components/panel-login/panel-login.component";
import { PanelComponent }          from "./components/panel/panel.component";
import { PanelInicioComponent }          from "./components/panel-inicio/panel-inicio.component";
import { PanelInventarioComponent } from "./components/panel-inventario/panel-inventario.component";
import { PanelMovimientosComponent } from "./components/panel-movimientos/panel-movimientos.component";
import { PanelKardexComponent } from "./components/panel-kardex/panel-kardex.component";

//servicios
import { GuardiaService }     from "./services/guardia.service";

const ROUTES = [

  { path: 'login', component: PanelLoginComponent },   

  { path: 'panel', component: PanelComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inicio'},
      { path: 'inicio', component:PanelInicioComponent },
      { path: 'inventario', component:PanelInventarioComponent },
      { path: 'movimientos', component:PanelMovimientosComponent },
      { path: 'kardex', component:PanelKardexComponent },
      { path: '**', pathMatch: 'full', redirectTo:'inicio' }

    ],
    canActivate: [ GuardiaService ]
  },
  { path: '**', pathMatch: 'full', redirectTo:'login' }

];

export const ROUTES_APP = RouterModule.forRoot(ROUTES, {useHash:true});

export const routedComponents = [
  //Components dashboard - componentes del panel
  NavbarComponent,
  HeaderComponent,
  FooterComponent,
  PanelLoginComponent,
  PanelComponent, 
  PanelInicioComponent, 
  PanelInventarioComponent,
  PanelMovimientosComponent,
  PanelKardexComponent
];