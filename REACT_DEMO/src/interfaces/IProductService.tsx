import { IProduct } from "./IProduct";

export interface IProductService {
  addProduct(product: IProduct): void;
  getProducts(): Promise<IProduct[]>;
}
