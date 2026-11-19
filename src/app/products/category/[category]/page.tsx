type Props = {
  params: Promise<{ category: string }>;
};

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params;

  return (
    <>
      <h3>Category {category}</h3>
    </>
  );
};

export default CategoryPage;
