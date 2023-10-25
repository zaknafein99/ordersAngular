import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CustomerService } from '../customer.service';
import { Customer } from './Customer'

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  dataSource = new MatTableDataSource<Customer>([]);
  displayedColumns: string[] = ['id', 'name', 'address', 'phoneNumber'];

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.dataSource.data = customers;
    });
  }
}
