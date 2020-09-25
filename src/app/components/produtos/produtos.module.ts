import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos.component';



@NgModule({
  declarations: [ProdutosComponent],
  exports: [ProdutosComponent],

  imports: [
    CommonModule
  ]
})
export class ProdutosModule { }
