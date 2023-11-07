import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerResponse } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustService {

  constructor(private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getCustomers(pageNumber: number, pageSize: number): Observable<CustomerResponse>{
    return this.http.get<CustomerResponse>(`http://localhost:8080/customer/list?size=${pageSize}&page=${pageNumber}`);
  }

  getCustomersByPhone(phone: string): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(`http://localhost:8080/customer/search_phone/${phone}`);
}

}
