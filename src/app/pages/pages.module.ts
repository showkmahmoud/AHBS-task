import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductPageComponent } from './components/product-page/product-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ProductPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

  ]
})
export class PagesModule { }
