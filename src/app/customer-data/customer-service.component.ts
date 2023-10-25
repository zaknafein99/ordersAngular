import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, mapTo } from 'rxjs/operators';

export interface Customer {
  id: number;
  name: string;
  address: string;
  phoneNumber: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly customerUrl: string = 'localhost:8080/customer/list';

  constructor(private httpClient: HttpClient) {}

  getCustomers(page: number, size: number): Observable<Customer[]> {
    const params = {
      page: page,
      size: size,
    };

    return this.httpClient.get<Customer[]>(this.customerUrl, { params, observe: 'response' })
      .pipe(
        map((response: HttpResponse<Customer[]>) => response.body),
        catchError((error: HttpErrorResponse) => {
          // Handle the error here
          return throwError(error);
        })
      );
  }
}