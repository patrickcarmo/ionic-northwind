import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShipperPage } from './shipper';

@NgModule({
  declarations: [
    ShipperPage,
  ],
  imports: [
    IonicPageModule.forChild(ShipperPage),
  ],
})
export class ShipperPageModule {}
