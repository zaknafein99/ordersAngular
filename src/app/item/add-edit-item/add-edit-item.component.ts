import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent {

  @Input() displayAddModal: boolean = true;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAdd: EventEmitter<any> = new EventEmitter<any>();

  itemForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    quantity: [''],
    category: ['']
  });

  constructor(private fb: FormBuilder, private itemService: ItemService, private messageService: MessageService ) { }

  closeModal() {
    this.itemForm.reset();
    this.clickClose.emit(true);
  }

  addItem() {
    const item: Item = {
      name: this.itemForm.value.name,
      description: this.itemForm.value.description,
      price: Number(this.itemForm.value.price),
      quantity: Number(this.itemForm.value.quantity),
      category: this.itemForm.value.category
    };

    this.itemService.saveItem(item).subscribe(
      (response) => {
        console.log(response);
        this.clickAdd.emit(response);
        this.closeModal();
        this.messageService.add({severity:'success', summary:'Success', detail:'Item guardado correctamente'});
      },
      (error) => {
        console.log(error);
        this.messageService.add({severity:'error', summary:'Error', detail:'Error al guardar el item' + error});
      }
    )
  }

}
