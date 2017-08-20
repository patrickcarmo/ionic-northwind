import { Component } from '@angular/core';
import { ModalController, NavController, LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

import { Supplier } from './../../models/supplier/supplier';
import { SupplierService } from './../../providers/supplier/supplier';
//import { ModalSupplierPage } from './../modal-supplier/modal-supplier';

@Component({
  selector: 'page-supplier',
  templateUrl: 'supplier.html'
})
export class SupplierPage {

  suppliers: Supplier[];


  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public supplierService: SupplierService,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {

    this.supplierService.getSuppliers().subscribe(suppliers => {
      console.log(suppliers);
      this.suppliers = suppliers;
    });

    this.fetchContent();

  }

  fetchContent(): void {
    let loading = this.loadingCtrl.create({ content: 'Carregando dados...' });

    loading.present();

    this.supplierService.getSuppliers()
      .subscribe(suppliers => {
        this.suppliers = suppliers;
        loading.dismiss();
      });
  }

	/*
  insert() {

    let modal = this.modalCtrl.create(ModalSupplierPage);

    modal.onDidDismiss((data) => {
      if (data) {
        this.supplierService.addSupplier(data);
        this.fetchContent();
       // this.showToast('Registro ' + data.companyName + ' incluído com sucesso.')
      }
    });

    modal.present();
  };
  */

  edit(supplier) {
    /*
    let modal = this.modalCtrl.create(ModalSupplierPage, {
      parametro: supplier
    });
    modal.onDidDismiss((data) => {
      if (data) {
        this.supplierService.updateSupplier(data);
        //this.showToast('Registro ' + data.companyName + ' alterado com sucesso.')
      }
    });
    modal.present();
    */
  };
	
  delete(supplier) {
    this.supplierService.deleteSupplier(supplier.supplierID);
    this.fetchContent();
    //this.showToast('Registro ' + supplier.companyName + ' excluído com sucesso.')
  }

  showToast(message) {
    console.log('aqio')
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
  }

}
