import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { AddEditCustomerModule } from './add-edit-customer/add-edit-customer.module';


@NgModule({
  declarations: [
    CustomerComponent
    ],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    DialogModule,
    ToastModule,
    AddEditCustomerModule
  ],
  exports: [
    CustomerComponent
  ],
  providers: [
    MessageService
  ]
})
export class CustomerModule { }