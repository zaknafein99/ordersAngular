import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Customer } from './customer-data/Customer';
@Injectable({
  providedIn: 'root',
})

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseurl = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // GET
  getCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.baseurl + '/customer/list')
      .pipe(retry(1), catchError(this.errorHandl));
  }
  

  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
