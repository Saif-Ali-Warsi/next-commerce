async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <h3>Product Details</h3>
      <p>Product: {id}</p>
    </>
  );
}

export default ProductDetails;
