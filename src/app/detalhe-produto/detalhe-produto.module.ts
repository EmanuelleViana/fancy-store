import { DetalheProdutoRoutingModule } from './detalhe-produto-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalheProdutoComponent } from './detalhe-produto.component';



@NgModule({
  declarations: [DetalheProdutoComponent],
  exports: [DetalheProdutoComponent],
  imports: [
    CommonModule,
    DetalheProdutoRoutingModule
  ]
})
export class DetalheProdutoModule { }
