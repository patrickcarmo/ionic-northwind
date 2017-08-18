import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Shipper } from './../../models/shipper/shipper';

@Injectable()
export class ShipperService {

  readonly endpoint: string = 'https://urbano.eti.br/northwind/shipper';
  options: RequestOptions;

  constructor(public http: Http) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'K7-5(K,xTen_@MR')
    this.options = new RequestOptions({ headers: headers });
  }

  getShippers() {
    return this.http.get(this.endpoint, this.options)
      .map(res => res.json());
  }

  addShipper(shipper: Shipper) {
    return this.http.post(this.endpoint, shipper, this.options)
    .subscribe(); 
  }

  deleteShipper(id) {
    console.log(0)
    return this.http.delete(this.endpoint + "/" + id, this.options)
    .subscribe();
  }

  updateShipper(shipper: Shipper) {
    return this.http.put(this.endpoint, shipper, this.options)
    .subscribe();
  }


}
