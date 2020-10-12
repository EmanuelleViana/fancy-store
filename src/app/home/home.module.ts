import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutosModule } from '../produtos/produtos.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ProdutosModule
   ]
})
export class HomeModule { }
