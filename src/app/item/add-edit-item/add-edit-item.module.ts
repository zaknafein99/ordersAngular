import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditItemComponent } from './add-edit-item.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';



@NgModule({
  declarations: [
    AddEditItemComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule
  ],
  exports: [
    AddEditItemComponent
  ]
})
export class AddEditItemModule { }
