import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


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
  purchased:Array<any>;
  detailsSalesProduct:Array<any>;
  detailsPurchasesProduct:Array<any>;
  purchasesTotal:any = 0;
  salesTotal:any = 0;
  purchasesByProductTotal:any = 0;
  salesByProductTotal:any = 0;

  constructor(
    private modalService: NgbModal,
    private _inputsProducts:ProductsService,
    private _salesServices:SalesService,
  ) { 
    this.getPurchases();
    this.getSales();

  }

  ngOnInit() {
  }

  getPurchases(){
    this._inputsProducts.getHistoryByProduct().then(data => {
      let purchases:Array<any> = [];
      data.forEach(product => {
        purchases = purchases.concat(_.filter(_.map(product), o => typeof o == 'object' ));
      });
      this.purchased = purchases;
      purchases.forEach(purchase => {
        this.purchasesTotal += purchase.stock*purchase.value;
      });
    })
    .catch(error => {
      console.log(error)
    })
  }

  getSales(){
    this._salesServices.getSales().then(data => {
      this.sales = data;
      data.forEach(sale => {
        this.salesTotal += sale.quantity*sale.valueV;
      });
    })
    .catch(error => {
      console.log(error);
    })
  }

  modalDetailsSalesByProduct(contentModal, sale){
    this._salesServices.getSalesByProduct(sale).then(data => {
      this.detailsSalesProduct = _.filter(data, o => typeof o == 'object' );
      this.detailsSalesProduct.forEach(sale => {
        this.salesByProductTotal += sale.quantity*sale.valueV;
      });
      this.modalService.open(contentModal, {size: 'lg'}).result.then((result) => {
      }, (reason) => {
      });
    })
  }

  modalDetailsPurchasesByProduct(contentModal, purchase){
    this._inputsProducts.getHistoryByProduct2(purchase).then(data => {
      this.detailsPurchasesProduct = _.filter(data, o => typeof o == 'object' );
      this.detailsPurchasesProduct.forEach(purchase => {
        this.purchasesByProductTotal += purchase.stock*purchase.value;
      });
      this.modalService.open(contentModal, {size: 'lg'}).result.then((result) => {
      }, (reason) => {
      });
    })
  }

}
