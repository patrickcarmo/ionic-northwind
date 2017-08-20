import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ShipperPage } from './../pages/shipper/shipper';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';

import { ShipperService } from './../providers/shipper/shipper';
import { ModalShipperPage } from './../pages/modal-shipper/modal-shipper';

import { SupplierPage } from './../pages/supplier/supplier';
import { SupplierService } from '../providers/supplier/supplier';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ShipperPage,
    ModalShipperPage,
    SupplierPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ShipperPage,
    ModalShipperPage,
    SupplierPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ShipperService,
    SupplierService
  ]
})
export class AppModule {}
