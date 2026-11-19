import type { Product } from "@/app/types/product";

type Props = {
  params: Promise<{ category: string }>;
};

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;

  const api_url = "https://dummyjson.com";

  const response = await fetch(`${api_url}/products/category/${category}`);

  if (!response.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await response.json();

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
