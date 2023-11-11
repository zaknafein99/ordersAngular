import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer, CustomerResponse } from './customer';

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
    return this.http.get<CustomerResponse>(`http://localhost:8080/customer/list?size=${pageSize}&page=${pageNumber}&sort=id`);
  }

  getCustomersByPhone(phone: string): Observable<CustomerResponse> {
    return this.http.get<CustomerResponse>(`http://localhost:8080/customer/search_phone/${phone}`);
}

saveEditCustomer(customer: Customer, modalType: string): Observable<Customer> {
  if (modalType === 'Agregar') {
    return this.http.post<Customer>(`http://localhost:8080/customer`, customer, this.httpOptions);
  } else {
    return this.http.put<Customer>(`http://localhost:8080/customer/${customer.id}`, customer, this.httpOptions);
  }
}

}
