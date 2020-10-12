import { Produto } from './../../models/produto.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-produto',
  templateUrl: './item-produto.component.html',
  styleUrls: ['./item-produto.component.less']
})
export class ItemProdutoComponent implements OnInit {

  @Input() listaProdutos: Array<Produto>;
  
  constructor() { }

  ngOnInit(): void {
  }
  click(e){
console.log('a',e)
  }

}
