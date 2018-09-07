import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';

//Panel de administracion
import { PanelLoginComponent }          from "./components/panel-login/panel-login.component";
import { PanelComponent }          from "./components/panel/panel.component";
import { PanelInicioComponent }          from "./components/panel-inicio/panel-inicio.component";


// //servicios
// import { GuardiaService }     from "./services/guardia.service";
// import { GuardiaPinService }  from "./services/guardia-pin.service";

const ROUTES = [

  { path: 'login', component: PanelLoginComponent },   

  { path: 'panel', component: PanelComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'inicio'},
      { path: 'inicio',         component:PanelInicioComponent },
      { path: '**', pathMatch: 'full', redirectTo:'inicio' }

    ],
    //canActivate: [ GuardiaService ]
  }
];

export const ROUTES_APP = RouterModule.forRoot(ROUTES, {useHash:true});

export const routedComponents = [
  //Components dashboard - componentes del panel
  PanelLoginComponent,
  PanelComponent, 
  PanelInicioComponent, 
];