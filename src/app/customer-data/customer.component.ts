import { Component } from "@angular/core";
import { CustService } from "./cust.service";
import { TableLazyLoadEvent } from "primeng/table";
import { Customer, CustomerResponse } from "./customer";
import { LazyLoadEvent } from "primeng/api";

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


    customers!: Customer[];

    totalRecords!: number;

    selectAll: boolean = false;

    selectedCustomers!: Customer[];
    rows: number = 10;
    sortField: string = 'id';
    sortOrder: number = 1;

    constructor(private customerService: CustService) { }


    loadCustomers($event: TableLazyLoadEvent){
        this.loading = true;
        this.customerService.getCustomers($event.first, $event.rows).subscribe(
            (response: CustomerResponse) => {
                this.loading = false;
                this.listCustomers = response.content;
                this.totalElements = response.totalElements;
                console.log(this.listCustomers);
            }
        )
    }

    onSelectionChange(value = []) {
        this.selectAll = value.length === this.totalRecords;
        this.selectedCustomers = value;
    }

    onSelectAllChange(event: any) {
        const checked = event.checked;

        if (checked) {
            this.customerService.getCustomers(event.first, event.rows).subscribe((res) => {
                this.selectedCustomers = res.content;
                this.selectAll = true;
            });
        } else {
            this.selectedCustomers = [];
            this.selectAll = false;
        }
    }

    searchByPhone(phone: string) {
        this.customerService.getCustomersByPhone(phone).subscribe(
            (response: CustomerResponse) => {
                this.loading = false;
                this.listCustomers = response.content;
                this.totalElements = response.totalElements;
                console.log(this.listCustomers);
            }
        )
    }

    private _phoneFilter: string;
    get phoneFilter(): string {
        return this._phoneFilter;
    }
    set phoneFilter(value: string) {
        this._phoneFilter = value;
        if (this._phoneFilter) {
            this.searchByPhone(this._phoneFilter);
        } else {
            const defaultEvent: LazyLoadEvent = {
                first: 0,
                rows: this.rows,
                sortField: this.sortField,
                sortOrder: this.sortOrder
            };
            this.loadCustomers(defaultEvent);
        }
    }

}