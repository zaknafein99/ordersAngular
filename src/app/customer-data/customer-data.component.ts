import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { CustomerService } from '../customer.service';
import { Customer } from './Customer';
import { Pageable } from './pageable.interface';
/* import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DatePipe } from '@angular/common'; */


@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  datasource: any;
  listCustomers!: Customer[];
  totalElements: number = 50; // Add totalElements property

  displayedColumns: string[] = ['uuid', 'name', 'address', 'phoneNumber'];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.fetchCustomers();
  }

  ngAfterViewInit() {

  }

  fetchCustomers() {
    this.customerService.getCustomers().subscribe((pageable: Pageable<Customer>) => {
      this.listCustomers = pageable.content;
      this.datasource = new MatTableDataSource(this.listCustomers);
      this.datasource.paginator = this.paginator;
      this.totalElements = pageable.totalElements; // Set totalElements property
      console.log(this.listCustomers);
    })
  }
}