import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustService } from '../cust.service';
import { Customer } from '../customer';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.css']
})
export class AddEditCustomerComponent implements OnInit, OnChanges {

  @Input() displayAddEditModal: boolean = true;
  @Input() selectedCustomer: Customer = null;
  @Output() clickClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clickAddEdit: EventEmitter<any> = new EventEmitter<any>();
  modalType: string = 'Agregar';
  displayModal: boolean = false;

  customerForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    type: [''],
    state: ['']
  });

  constructor(private fb: FormBuilder, private customerService: CustService, private messageService: MessageService ) { }

  ngOnChanges(): void {
    if(this.selectedCustomer) {
      this.modalType = 'Editar';
      this.customerForm.patchValue(this.selectedCustomer);
    } else {
      this.modalType = 'Agregar';
      this.customerForm.reset();
    }
  }

  ngOnInit(): void {
    
  }

  closeModal() {
    this.customerForm
.reset();
    this.clickClose.emit(true);
  }

  addEditCustomer() {
    const customer: Customer = {
      id: this.selectedCustomer ? this.selectedCustomer.id : null,
      name: this.customerForm.value.name,
      address: this.customerForm.value.address,
      phoneNumber: this.customerForm.value.phoneNumber,
      type: this.customerForm.value.type,
      state: this.customerForm.value.state
    };

    this.customerService.saveEditCustomer(customer, this.modalType).subscribe(
      (response) => {
        console.log(response);
        this.clickAddEdit.emit(response);
        this.closeModal();
        const msg = this.modalType === 'Agregar' ? 'Cliente agregado correctamente' : 'Cliente editado correctamente';
        this.messageService.add({severity:'success', summary:'Success', detail:msg});
      },
      (error) => {
        console.log(error);
        this.messageService.add({severity:'error', summary:'Error', detail:'Error al guardar el Cliente' + error});
      }
    )
  }

}
