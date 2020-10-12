import { TamanhoItemProduto } from './tamanho-item-produto.model';
export class Produto {
  id: number;
  name: string;
  price: string;
  codeColor: string;
  image: string;
  onSale: boolean;
  sizes: Array<TamanhoItemProduto>;

  constructor(
    id: number,
    name: string,
    price: string,
    codeColor: string,
    image: string,
    onSale: boolean,
    sizes: Array<TamanhoItemProduto>) {
      this.name = name;
      this.price = price;
      this.codeColor = codeColor;
      this.image = image;
      this.onSale = onSale;
      this.sizes = sizes;
      this.id = id;
  }
}
