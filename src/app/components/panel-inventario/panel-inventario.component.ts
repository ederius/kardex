import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl, FormGroup, Validators } from "@angular/forms";


@Component({
  selector: 'app-panel-inventario',
  templateUrl: './panel-inventario.component.html',
  styleUrls: ['./panel-inventario.component.css']
})
export class PanelInventarioComponent implements OnInit {

  forma:FormGroup;
  loginError:string;


  constructor( private modalService: NgbModal ) { 
    this.forma = new FormGroup({
      'nombre' : new FormControl('', [Validators.minLength(3), Validators.required]),
      'valor'  : new FormControl('', [Validators.min(50), Validators.required]),
      'stock'  : new FormControl('', [Validators.min(1), Validators.required])
    });
  }

  ngOnInit() {
  }

  modalAddProduct(contentModal){
    //Abriendo modal para ver o insertar calificación de la entrevista con papas
    this.modalService.open(contentModal, {size: 'xl' as 'lg'}).result.then((result) => {
    }, (reason) => {
    });
  }

  addProduct(){

  }

}
