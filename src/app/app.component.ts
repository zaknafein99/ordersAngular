import { Component } from '@angular/core';
import { Customer } from './customer-data/Customer';
import { CustomerService } from './customer.service';
import { Pageable } from './customer-data/pageable.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular1';
  listCustomers!: Customer[];
  datasource: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }
}
