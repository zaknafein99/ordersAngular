import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [
    ItemComponent
  ]
})
export class ItemModule { }
