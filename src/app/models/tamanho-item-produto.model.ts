export class TamanhoItemProduto {
  id: number;
  size: string;
  available: boolean;

  constructor(
    id: number,
    size: string,
    available: boolean ){
      this.id = id;
      this.size = size;
      this.available = available;
    }
}
