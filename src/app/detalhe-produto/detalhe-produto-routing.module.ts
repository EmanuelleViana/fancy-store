import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheProdutoComponent } from './detalhe-produto.component';

const routes: Routes = [
  {
    path: '',
    component: DetalheProdutoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheProdutoRoutingModule {}
