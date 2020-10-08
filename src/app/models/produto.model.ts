import { TamanhoItemProduto } from './tamanho-item-produto.model';
export class Produto {
  id: number;
  name: string;
  price: string;
  codeColor: string;
  image: string;
  onSale: boolean;
  sizes: Array<TamanhoItemProduto>;
}