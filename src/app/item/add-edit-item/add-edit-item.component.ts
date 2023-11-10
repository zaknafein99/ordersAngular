import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html',
  styleUrls: ['./add-edit-item.component.css']
})
export class AddEditItemComponent implements OnInit, OnChanges {

  @Input() displayAddEditModal: boolean = true;
  @Input() selectedItem: Item = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType: string = 'Agregar';

  itemForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: [0, Validators.required],
    quantity: [0],
    category: ['']
  });

  constructor(private fb: FormBuilder, private itemService: ItemService, private messageService: MessageService ) { }

  ngOnChanges(): void {
    if(this.selectedItem) {
      this.modalType = 'Editar';
      this.itemForm.patchValue(this.selectedItem);
    } else {
      this.modalType = 'Agregar';
      this.itemForm.reset();
    }
  }

  ngOnInit(): void {
    
  }

  closeModal() {
    this.itemForm.reset();
    this.clickClose.emit(true);
  }

  addEditItem() {
    const item: Item = {
      id: this.selectedItem ? this.selectedItem.id : null,
      name: this.itemForm.value.name,
      description: this.itemForm.value.description,
      price: Number(this.itemForm.value.price),
      quantity: Number(this.itemForm.value.quantity),
      category: this.itemForm.value.category
    };

    this.itemService.saveEditItem(item, this.modalType).subscribe(
      (response) => {
        console.log(response);
        this.clickAddEdit.emit(response);
        this.closeModal();
        const msg = this.modalType === 'Agregar' ? 'Item agregado correctamente' : 'Item editado correctamente';
        this.messageService.add({severity:'success', summary:'Success', detail:msg});
      },
      (error) => {
        console.log(error);
        this.messageService.add({severity:'error', summary:'Error', detail:'Error al guardar el item' + error});
      }
    )
  }

}
