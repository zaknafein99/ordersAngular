import { Sort } from "@angular/material/sort";
import { Pageable } from "./pageable.interface";

export interface CustomerResponse {
    content: Customer[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: Sort;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}
export interface Customer {
    id: number;
    name: string;
    address: string;
    phoneNumber: string;
    type: string;
    state: string;
}