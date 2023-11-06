import { Component } from '@angular/core';
import { ItemService } from './item.service';
import { TableLazyLoadEvent } from 'primeng/table';
import { Item, ItemResponse } from './item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

    listItems: Item[] = [];
    totalElements: number;
    datasource: any;
    item: Item;
    loading: boolean = true;
    displayAddModal: boolean = false;

  constructor(private itemService: ItemService) { }

  loadItems($event: TableLazyLoadEvent){
    this.loading = true;
    this.itemService.getItems($event.first, $event.rows).subscribe(
        (response: ItemResponse) => {
            this.loading = false;
            this.listItems = response.content;
            this.totalElements = response.totalElements;
        }
    )
}

  showAddModal() {
    this.displayAddModal = true;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddModal = !isClosed;
  }

}
