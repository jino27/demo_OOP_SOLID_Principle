import { IProductService } from "../interfaces/IProductService";
import { IProduct } from "../interfaces/IProduct";

export class LocalProductService implements IProductService {
  private products: IProduct[] = [];

  addProduct(product: IProduct): void {
    this.products.push(product);
  }

  async getProducts(): Promise<IProduct[]> {
    return this.products;
  }
}
