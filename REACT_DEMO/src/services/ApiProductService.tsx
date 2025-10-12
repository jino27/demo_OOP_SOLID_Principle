import { IProductService } from "../interfaces/IProductService";
import { Product } from "../models/Product";

export class ApiProductService implements IProductService {
  async getProducts(): Promise<Product[]> {
    const response = await fetch("https://fakestoreapi.com/products?limit=10");
    const data = await response.json();

    return data.map((p: any) =>
      new Product({
        id: p.id,
        name: p.title,
        price: p.price,
        category: p.category,
        getProductInfo: () => `${p.title} - $${p.price}`,
      })
    );
  }

  addProduct(product: Product): void {
    console.log("Simulated API POST:", product);
  }
}
