import AddToCart from "@/app/components/AddToCart";

type Product = {
  id: number;
  title: string;
  price: number;
};

async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const api_url = "https://dummyjson.com";

  const response = await fetch(`${api_url}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to load Products!");
  }

  const product: Product = await response.json();

  return (
    <>
      <div className="product-card">
        <h3>Product Details</h3>
        <hr />
        <p>{product.title}</p>
        <p>{product.price}</p>
        <AddToCart productId={product.id} price={product.price} />
      </div>
    </>
  );
}

function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <>
      <ProductDetails params={params}></ProductDetails>
    </>
  );
}

export default ProductDetailPage;
