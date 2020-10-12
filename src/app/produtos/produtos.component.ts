import { ProdutosService } from './produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.less']
})
export class ProdutosComponent implements OnInit {
  public listaProdutos: Array<Produto>;

  constructor(private service: ProdutosService) { }

  ngOnInit(): void {
    this.iniciarProdutos();
  }

  public iniciarProdutos(): void {
    this.listaProdutos = this.service.obterProdutos();
  }

}
