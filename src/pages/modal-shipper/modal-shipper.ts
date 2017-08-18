import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({

  selector: 'page-modal-shipper',
  templateUrl: 'modal-shipper.html',
})
export class ModalShipperPage {

  shipper: {
    companyName: string,
    phone: string
  };


  static get parameters() {
    return [[ViewController], [NavParams]]
  }

  constructor(public view: ViewController, public params: NavParams) {

    this.view = view;
    this.shipper = params.get("parametro") || { companyName: "" } || {phone : ""};
  }

  cancel() {

    this.view.dismiss();
  }

  save() {

    this.view.dismiss(this.shipper);
  }

}
