export default function ProductsLayout({ children }: LayoutProps<"/products">) {
  return (
    <>
      <h3>Products Section</h3>
      {children}
    </>
  );
}
