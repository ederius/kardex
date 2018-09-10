import { Injectable } from '@angular/core';

//Packages
import { database } from "firebase";
import * as _ from "lodash";
import * as moment from "moment-timezone";
moment.locale('es');
moment.tz("America/Los_Angeles");


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){
    return database().ref(`products`).once('value').then(data => {
      return _.map(data.val());
    })
    .catch(error => {
      return error
    });
  }

  addProduct(product){
    product.date = moment().format('L, h:mm:ss a');      //obteniendo fecha y hora actual  
    return database().ref().child(`products/`).push().then(ref=>{
      let key = product.key = ref.key; 
      database().ref(`inventaryHistoryByProduct/${key}`).set({keyProduct:product.key}).then( history => {
        let respuesta = this.addElelementsTohistoryByProduct(product);
      })
      return database().ref(`products/${key}/`).set(product).then( data => {
        return data.val();
      }).catch( error =>{
        return error
      });
    })    
  }

  addElelementsProduct(stock, product){
      this.addElelementsTohistoryByProduct(product);
      return database().ref(`products/${product.key}`).update(stock).then( data => {
        return data;
      }).catch( error =>{
        return error
      });
  }

  addElelementsTohistoryByProduct(product){
    return database().ref().child(`inventaryHistoryByProduct/${product.key}`).push().then(ref=>{
      product.key2 = ref.key;
      product.date = moment().format('L, h:mm:ss a');
      return database().ref(`inventaryHistoryByProduct/${product.key}/${product.key2}`).update(product)
      .then( data => {
        return data;
      }).catch( error =>{
        return error
      });
    });
  }


  getHistoryByProduct(){
    return database().ref(`inventaryHistoryByProduct`).once('value').then(data => {
      return _.map(data.val());
    })
    .catch(error => {
      return error
    });
  }

  getHistoryByProduct2(product){
    return database().ref(`inventaryHistoryByProduct/${product.key}`).once('value').then(data => {
      return _.map(data.val());
    })
    .catch(error => {
      return error
    });
  }


}
