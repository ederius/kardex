import { Injectable } from '@angular/core';
import { database } from "firebase";
import * as _ from "lodash";
import * as moment from "moment-timezone";
moment.locale('es');
moment.tz("America/Los_Angeles");


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor() { }

  addSale(sale){
    sale.date = moment().format('L, h:mm:ss a');      //obteniendo fecha y hora actual  
    return database().ref().child(`sales/`).push().then(ref=>{
      let key = ref.key;
      database().ref(`historySalesByProduct/${sale.keyProduct}`).set({keyProduct:sale.keyProduct}).then( history => {
        this.addElelementsTohistorySalesByProduct(sale);
        this.discountInventaryByProduct(sale.keyProduct, sale.stock)
      })
      return database().ref(`sales/${key}/`).set(sale).then( data => {
        return data;
      }).catch( error =>{
        return error
      });
    })    
  }

  addElelementsTohistorySalesByProduct(sale){
    return database().ref().child(`historySalesByProduct/${sale.keyProduct}/`).push().then(ref=>{
      let key2 = ref.key;
      let date = moment().format('L, h:mm:ss a');
      sale.date = date
      return database().ref(`historySalesByProduct/${sale.keyProduct}/${key2}`).update(sale)
      .then( data => {
        return data;
      }).catch( error =>{
        return error
      });
    });
  }

  getSales(){
    return database().ref(`sales`).once('value').then(data => {
      return _.map(data.val());
    })
    .catch(error => {
      return error
    });
  }

  discountInventaryByProduct(productKey, newStock){
    return database().ref(`products/${productKey}`).update({stock:newStock}).then( data => {
      return data;
    }).catch( error =>{
      return error
    });
  }



}
