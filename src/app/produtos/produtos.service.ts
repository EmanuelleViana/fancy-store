import { TamanhoItemProduto } from './../models/tamanho-item-produto.model';
import { Produto } from './../models/produto.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor() { }

  obterProdutos(): Array<Produto> {
    return [
      new Produto(0, 'VESTIDO TRANSPASSE BOW', '199.90', 'azul', 'https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg' , true, [new TamanhoItemProduto(0, 'P', true)] ),
      new Produto(1, 'REGATA ALCINHA FOLK', '199.90', 'azul', 'https://viniciusvinna.netlify.app/assets/api-fashionista/20002570_002_catalog_1.jpg' , true, [new TamanhoItemProduto(0, 'P', true)] ),
      new Produto(2, 'OP CROPPED SUEDE', '199.90', 'azul', 'https://viniciusvinna.netlify.app/assets/api-fashionista/20002575_027_catalog_1.jpg' , true, [new TamanhoItemProduto(0, 'P', true)] )
    ];
  }
}
