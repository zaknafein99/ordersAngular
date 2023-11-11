import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CustService } from "./cust.service";
import { TableLazyLoadEvent } from "primeng/table";
import { Customer, CustomerResponse } from "./customer";

@Component({
    selector: 'table-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css'],
})

export class CustomerComponent{

    listCustomers: Customer[] = [];
    totalElements: number;
    datasource: any;
    customer: Customer;
    loading: boolean = true;
    displayAddEditModal: boolean = false;
    selectedCustomer: Customer = null;

  constructor(private customerService: CustService) { }

  loadCustomers($event: TableLazyLoadEvent){
    this.loading = true;
    this.customerService.getCustomers($event.first, $event.rows).subscribe(
        (response: CustomerResponse) => {
            this.loading = false;
            this.listCustomers = response.content;
            this.totalElements = response.totalElements;
        }
    );
  }
  showAddModal() {
    this.displayAddEditModal = true;
    this.selectedCustomer = null;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }

  saveOrUpdateCustomerList(newData: any) {
    this.loadCustomers({first: 0, rows: 10});
  }

  showEditCustomerModal(customer: Customer) {
    this.displayAddEditModal = true;
    this.selectedCustomer = customer;
  }
}