import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item, ItemResponse } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getItems(pageNumber: number, pageSize: number): Observable<ItemResponse>{
    return this.http.get<ItemResponse>(`http://localhost:8080/item/list?page=${pageNumber}&size=${pageSize}`);
  }

  saveEditItem(item: Item, modalType: string): Observable<Item> {
    if(modalType === 'Agregar') {
      return this.http.post<Item>('http://localhost:8080/item', item, this.httpOptions);
    } else {
      return this.http.put<Item>(`http://localhost:8080/item/${item.id}`, item, this.httpOptions);
    }
    
  }

}
