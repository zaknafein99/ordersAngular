import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { AddEditItemModule } from './add-edit-item/add-edit-item.module';

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    ButtonModule,
    DialogModule,
    AddEditItemModule
  ],
  exports: [
    ItemComponent
  ]
})
export class ItemModule { }
