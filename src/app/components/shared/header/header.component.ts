import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from '../../../services/autenticacion.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router, private _authServices:AutenticacionService) { }

  ngOnInit() {
  }

  signOut(){
    this._authServices.singOut().then((response)=>{
      this.router.navigate(['/login']);
    })
  }

}
