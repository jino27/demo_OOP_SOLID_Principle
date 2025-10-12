import { IProduct } from "../interfaces/IProduct";

export class Product implements IProduct {
  id: number;
  name: string;
  price: number;
  category?: string;

  constructor(product: IProduct) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.category = product.category;
  }

  getProductInfo(): string {
    return `${this.name} - $${this.price.toFixed(2)}`;
  }
}

