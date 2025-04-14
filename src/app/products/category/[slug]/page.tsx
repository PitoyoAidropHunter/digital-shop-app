import Navbar from "@/app/components/Navbar/page";
import CardProduct from "@/app/components/products/ProductCard/page";
import products from "@/data/products";

const CategoryPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="min-h-screen bg-secondary py-5 px-10 lg:px-20">
          <div>
            <h1 className="text-3xl font-semibold text-primary text-center mb-8">
              Category: {params.slug}
            </h1>
            <p className="text-primary text-center mb-10">
              1,778 inspirational designs, illustrations, and graphic elements
              from the world’s best designers. Want more inspiration? Browse our
              search results
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 ">
            {products.map((product) => {
              if (product.category === params.slug) {
                return (
                  <div key={product.id} className="text-primary text-center">
                    <CardProduct key={product.id} product={product} />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
