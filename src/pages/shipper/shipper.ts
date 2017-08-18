import { Component } from '@angular/core';
import { ModalController, NavController, LoadingController } from 'ionic-angular';

import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

import { Shipper } from './../../models/shipper/shipper';
import { ShipperService } from './../../providers/shipper/shipper';
import { ModalShipperPage } from './../modal-shipper/modal-shipper';

@Component({
  selector: 'page-shipper',
  templateUrl: 'shipper.html'
})
export class ShipperPage {

  shippers: Shipper[];


  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public shipperService: ShipperService,
    public loadingCtrl: LoadingController, private toastCtrl: ToastController) {

    this.shipperService.getShippers().subscribe(shippers => {
      console.log(shippers);
      this.shippers = shippers;
    });

    this.fetchContent();

  }

  fetchContent(): void {
    let loading = this.loadingCtrl.create({ content: 'Carregando dados...' });

    loading.present();

    this.shipperService.getShippers()
      .subscribe(shippers => {
        this.shippers = shippers;
        loading.dismiss();
      });
  }

  /*
  presentAlert(shipper: Shipper) {
    let alert = this.alertCtrl.create({
      title: shipper.companyName,
      subTitle: shipper.phone,
      buttons: ['Fechar']
    });
    alert.present();
  }
  */

  insert() {

    let modal = this.modalCtrl.create(ModalShipperPage);

    modal.onDidDismiss((data) => {
      if (data) {
        this.shipperService.addShipper(data);
        this.fetchContent();
       // this.showToast('Registro ' + data.companyName + ' incluído com sucesso.')
      }
    });

    modal.present();
  };

  edit(shipper) {
    let modal = this.modalCtrl.create(ModalShipperPage, {
      parametro: shipper
    });
    modal.onDidDismiss((data) => {
      if (data) {
        this.shipperService.updateShipper(data);
        //this.showToast('Registro ' + data.companyName + ' alterado com sucesso.')
      }
    });
    modal.present();
  };

  delete(shipper) {
    this.shipperService.deleteShipper(shipper.shipperID);
    this.fetchContent();
    //this.showToast('Registro ' + shipper.companyName + ' excluído com sucesso.')
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
