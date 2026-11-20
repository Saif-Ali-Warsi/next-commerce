import type { Product } from "@/app/types/product";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { category } = await params;

  return {
    title: `${category} | NextCommerce`,
    description: `Explore our ${category} collection.`,
  };
}

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;

  const api_url = "https://dummyjson.com";

  const response = await fetch(`${api_url}/products/category/${category}`);

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  if (data.products.length === 0) {
    notFound();
  }

  return (
    <div>
      <h1>Category: {category}</h1>

      {data.products.map((product: Product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
