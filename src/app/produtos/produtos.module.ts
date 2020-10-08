import { ItemProdutoModule } from './../components/item-produto/item-produto.module';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    ItemProdutoModule
  ]
})
export class ProdutosModule { }
