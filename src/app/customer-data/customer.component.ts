import { Component } from "@angular/core";
import { CustService } from "./cust.service";
import { TableLazyLoadEvent } from "primeng/table";
import { Customer, CustomerResponse } from "./customer";

@Component({
    selector: 'table-customer',
    templateUrl: './customer.component.html'
})

export class CustomerComponent {

    listCustomers: Customer[] = [];
  totalElements: number;
  datasource: any;
  customer: Customer;
  loading: boolean = true;

    constructor(private customerService: CustService) { }


  loadCustomers($event: TableLazyLoadEvent){
    this.loading = true;
    this.customerService.getCustomers($event.first, $event.rows).subscribe(
      (response: CustomerResponse) => {
        this.loading = false;
        this.listCustomers = response.content;
        this.totalElements = response.totalElements;
      }
    )
  }

}