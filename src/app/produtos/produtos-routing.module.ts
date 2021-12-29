import { DetalheProdutoModule } from './../detalhe-produto/detalhe-produto.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../detalhe-produto/detalhe-produto.module').then(
        (m) => m.DetalheProdutoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosRoutingModule {}
