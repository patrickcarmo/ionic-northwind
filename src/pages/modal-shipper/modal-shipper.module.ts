import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalShipperPage } from './modal-shipper';

@NgModule({
  declarations: [
    ModalShipperPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalShipperPage),
  ],
})
export class ModalShipperPageModule {}
