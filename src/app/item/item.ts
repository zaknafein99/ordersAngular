import { Sort } from "@angular/material/sort";
import { Pageable } from "./pageable.interface";

export interface Item {
    "id": number,
    "name": String,
    "description": String,
    "price": DoubleRange,
    "quantity": number,
}

export interface ItemResponse {
    "content": Item[],
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
