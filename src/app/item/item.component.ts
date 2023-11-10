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
    displayAddEditModal: boolean = false;
    selectedItem: Item = null;

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
    this.displayAddEditModal = true;
    this.selectedItem = null;
  }

  hideAddModal(isClosed: boolean) {
    this.displayAddEditModal = !isClosed;
  }

  saveOrUpdateProductList(newData: any) {
    this.loadItems({first: 0, rows: 10});
  }

  showEditItemModal(item: Item) {
    this.displayAddEditModal = true;
    this.selectedItem = item;
  }

}
