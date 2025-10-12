import { Product } from "./Product";

export class DigitalProduct extends Product {
  private fileSize: number;

  constructor(product: any, fileSize: number) {
    super(product);
    this.fileSize = fileSize;
  }

  // Polymorphism: override base behavior
  getProductInfo(): string {
    return `💾 Digital: ${this.name} - $${this.price.toFixed(2)} (${this.fileSize}MB)`;
  }
}
