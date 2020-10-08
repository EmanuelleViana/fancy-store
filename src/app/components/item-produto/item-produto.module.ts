import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemProdutoComponent } from './item-produto.component';



@NgModule({
  declarations: [ItemProdutoComponent],
  exports: [ItemProdutoComponent],
  imports: [
    CommonModule
  ]
})
export class ItemProdutoModule { }
