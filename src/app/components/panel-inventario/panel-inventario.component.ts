import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";

//Services
import { ProductsService } from "../../services/products.service";

@Component({
  selector: 'app-panel-inventario',
  templateUrl: './panel-inventario.component.html',
  styleUrls: ['./panel-inventario.component.css']
})
export class PanelInventarioComponent implements OnInit {

  forma:FormGroup;
  formaAddElementsProduct:FormGroup;
  loginError:string;
  successAddProduct:boolean;
  successAddStock:boolean
  products:Array<any>;
  product:any= {};
  inputsForms:any;



  constructor( 
    private modalService: NgbModal,
    private _productsServices:ProductsService,
  ) { 

    this.forma = new FormGroup({
      'name' : new FormControl('', [Validators.minLength(3), Validators.required]),
      'value' : new FormControl('', [Validators.min(50), Validators.required]),
      'valueV' : new FormControl('', [Validators.min(50), Validators.required]),
      'stock' : new FormControl('', [Validators.min(1), Validators.required])
    });

    this.formaAddElementsProduct = new FormGroup({
      'stock'  : new FormControl('', [Validators.min(1), Validators.required])
    })
    this.getProducts();
  }

  ngOnInit() {
  }

  modalAddProduct(contentModal){
    this.modalService.open(contentModal, {size: 'sm'}).result.then((result) => {
    }, (reason) => {
    });
  }

  addProduct(){
    if(this.forma.valid){
      this._productsServices.addProduct(this.forma.value).then( data => {
        this.getProducts();
        this.successAddProduct=true;
        this.forma.reset();
        setTimeout( () => {
          this.modalService.dismissAll();
         },3000)
      })

    }
  }

  getProducts(){
    this._productsServices.getProducts().then(data => {
      this.products = data;
    })
    .catch( error => {
      console.error(error);
    })
  }

  modalAddElementsProduct(product, contentModal){
    this.product=product;
    this.modalService.open(contentModal, {size: 'sm'}).result.then((result) => {
    }, (reason) => {
    });
  }

  addElementsProduct(){
    let stockAdd = this.formaAddElementsProduct.value.stock;
    let stock = {stock:this.product.stock + stockAdd};
    this.product.stock = stockAdd;
    this._productsServices.addElelementsProduct(stock, this.product).then(data => {
      this.getProducts();
      //this.addStockToproduct(this.product.key, this.formaAddElementsProduct.value.stock);
      this.successAddStock = true;
    })
    .catch(error => {
      console.log(error);
    })
  }

  formaChageDirty(input){
    switch (input) {
      case 'name':
        try{
          this.forma.controls.name.errors.dirty = true;
        }catch(error){}
        break;
      case 'stock':
      try{
        this.forma.controls.stock.errors.dirty = true;
      }catch(error){}        
      break;
      case 'value':
      try{
        this.forma.controls.value.errors.dirty = true;
      }catch(error){}        
      break;
      case 'valueV':
      try{
        this.forma.controls.valueV.errors.dirty = true;
      }catch(error){}        
      break;
    
      default:
        break;
    }
  }

  formaAddElementsChageDirty(input){
    switch (input) {
      case 'stock':
      try{
        this.formaAddElementsProduct.controls.stock.errors.dirty = true;
      }catch(error){}        
      break;
      default:
        break;
    }
  }



}


