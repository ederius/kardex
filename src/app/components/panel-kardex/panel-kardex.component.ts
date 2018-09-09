import { Component, OnInit } from '@angular/core';

//Services
import { ProductsService } from "../../services/products.service";
import { SalesService } from "../../services/sales.service";


@Component({
  selector: 'app-panel-kardex',
  templateUrl: './panel-kardex.component.html',
  styleUrls: ['./panel-kardex.component.css']
})
export class PanelKardexComponent implements OnInit {

  sales:Array<any>;
  inputsProducts:Array<any>;

  constructor(
    private _inputsProducts:ProductsService,
    private _salesServices:SalesService,
  ) { }

  ngOnInit() {
  }

  inputsProducs(){
  }



  salesProducts(){

  }

}
