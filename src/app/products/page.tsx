import Image from "next/image";
import Link from "next/link";

import type { Product } from "@/app/types/product";

type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const Products = async () => {
  const api_url = "https://dummyjson.com";

  const response = await fetch(`${api_url}/products?limit=20&skip=0`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data: ProductsResponse = await response.json();

  return (
    <>
      <h3>Products!</h3>
      <div className="flex flex-wrap gap-2">
        {data.products.map((product) => (
          <Link href={`/products/${product.id}`}>
            <div key={product.id} className="product-card">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
              />
              <p>{product.title}</p>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Products;
