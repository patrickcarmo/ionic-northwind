import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Supplier } from './../../models/supplier/supplier';

@Injectable()
export class SupplierService {

  readonly endpoint: string = 'https://urbano.eti.br/northwind/supplier';
  options: RequestOptions;

  constructor(public http: Http) {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'K7-5(K,xTen_@MR')
    this.options = new RequestOptions({ headers: headers });
  }

  getSuppliers() {
    return this.http.get(this.endpoint, this.options)
      .map(res => res.json());
  }

  addSupplier(supplier: Supplier) {
    return this.http.post(this.endpoint, supplier, this.options)
      .subscribe();
  }

  deleteSupplier(id) {
    console.log(0)
    return this.http.delete(this.endpoint + "/" + id, this.options)
      .subscribe();
  }

  updateSupplier(supplier: Supplier) {
    return this.http.put(this.endpoint, supplier, this.options)
      .subscribe();
  }


}
