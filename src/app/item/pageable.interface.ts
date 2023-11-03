import { Item } from "./item";

export interface Pageable {
    content: Item[];
    pageable: {
      sort: {
        sorted: boolean;
        unsorted: boolean;
        empty: boolean;
      };
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
      unpaged: boolean;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: boolean;
    };
    numberOfElements: number;
    size: number;
    number: number;
    empty: boolean;
  }