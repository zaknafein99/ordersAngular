import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer-data/Customer';
import { Pageable } from './customer-data/pageable.interface';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCustomers(): Observable<Pageable<Customer>> {
    return this.httpclient.get<Pageable<Customer>>('http://localhost:8080/customer/list');
  }
}