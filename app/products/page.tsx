import React from "react";
import ProductCard from "../components/product-card/ProductCard";
import { ProductsService } from "../services/product-service";

export default async function ProductList() {
  var products = await ProductsService.getProducts();
  console.log(products);
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-4 gy-4">
        {products.map((p: any) => {
          return (
            <div className="col" key={p.id}>
              <ProductCard product={p} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
