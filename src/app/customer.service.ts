import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer-data/customer';


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

  getCustomers(): Observable<Customer> {
    return this.httpclient.get<Customer>('http://localhost:8080/customer/list');
  }
}