import { useEffect, useState } from "react";
import { IProduct } from "./interfaces/IProduct";
import { IProductService } from "./interfaces/IProductService";
import { LocalProductService } from "./services/LocalProductService";
import { ApiProductService } from "./services/ApiProductService";
import { Product } from "./models/Product";
import { DigitalProduct } from "./models/DigitalProduct";
import "./App.css";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  // Dependency Inversion: Component depends on IProductService
  const productService: IProductService = new ApiProductService();
  // Try switching to: const productService: IProductService = new ApiProductService();

  useEffect(() => {
    // Local mock data
    const book = new Product({
      id: 1,
      name: "Clean Code",
      price: 29.99,
      category: "Books",
      getProductInfo: () => "",
    });

    const ebook = new DigitalProduct(
      {
        id: 2,
        name: "React Design Patterns eBook",
        price: 14.99,
        category: "Digital",
        getProductInfo: () => "",
      },
      120
    );

    productService.addProduct(book);
    productService.addProduct(ebook);

    productService.getProducts().then(setProducts);
  }, [productService]);

  return (
    <div className="app">
      <header className="header">
        <h1>🛒 React OOP Shop</h1>
        <p className="subtitle">
          <em>Demonstrating OOP + Dependency Inversion in React + TypeScript</em>
        </p>
      </header>

      <main>
        <h2 className="section-title">Our Products</h2>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img
                  src={`https://picsum.photos/seed/${product.id}/300/200`}
                  alt={product.name}
                />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">${product.price.toFixed(2)}</p>
                <p className="desc">{product.getProductInfo()}</p>

                <button className="btn-buy">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );

}

export default App;
