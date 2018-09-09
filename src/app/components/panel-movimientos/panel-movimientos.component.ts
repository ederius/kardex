import { Component, OnInit } from '@angular/core';
import * as moment from "moment-timezone";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl, FormGroup, Validators } from "@angular/forms";

import * as _ from "lodash";
moment.locale('es');
moment.tz("America/Los_Angeles");
import { Router } from "@angular/router";

//Services
import { AutenticacionService } from "../../services/autenticacion.service";
import { ProductsService } from "../../services/products.service";
import { SalesService } from "../../services/sales.service";

@Component({
  selector: 'app-panel-movimientos',
  templateUrl: './panel-movimientos.component.html',
  styleUrls: ['./panel-movimientos.component.css']
})
export class PanelMovimientosComponent implements OnInit {


  date:Date;
  sales:Array<any>;
  products:any;
  success:String;
  error:String;
  productSelect:any = "";
  product:any
  stock:number;
  valueV:number;
  quantity:number;
  total:number;
  totalTotal:number;

  constructor(
    private modalService: NgbModal,
    private _auth: AutenticacionService,
    private router: Router,
    private _productsService:ProductsService,
    private _salesService: SalesService
  ) { 
    this.getSales();
    this.getProduct();

   }

  ngOnInit() {
  }

  getProduct(){
    this._productsService.getProducts()
    .then( data => {
      this.products = data;
    })
    .catch( error => {
      console.log(error);
    })
  }

  modalAddSale(contentModal){
    this.modalService.open(contentModal, {size: 'xl' as 'lg'})
  }

  getSales(){
    this._salesService.getSales().then(data => {
      this.sales = data;
      this.totalTotal = _.sumBy(this.sales, o => o.total)
    })
    .catch(error => {
      console.error(error)
    })

  }

  productSelected(){
    let index = this.productSelect; 
    this.product = this.products[index];
    this.stock = this.product.stock;
    this.valueV = this.product.valueV;
  }

  changeStock(){
    this.stock = this.product.stock - this.quantity; 
  }

  addSale(){
    let sale:any ={
      keyProduct: this.product.key,
      name: this.product.name,
      stock: this.stock,
      valueV: this.valueV,
      quantity: this.quantity,
      total: this.valueV * this.quantity     
    }
    this._salesService.addSale(sale).then(data => {
      this.success = "Venta registrada con exito!"
      this.getSales();
      this.getProduct();
      setTimeout( () => {
        this.modalService.dismissAll();
        this.stock = null;
        this.valueV = null;
        this.quantity = null;
        this.total = null;
        this.productSelect = "";
       },2000)
    })
  }




}
