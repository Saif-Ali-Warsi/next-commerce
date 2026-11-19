type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

const Products = async () => {
  const api_url = "https://dummyjson.com";

  const response = await fetch(`${api_url}/products?limit=20&skip=0`);

  const data = await response.json();

  console.log(data);

  return (
    <>
      <h3>Products!</h3>
    </>
  );
};

export default Products;
