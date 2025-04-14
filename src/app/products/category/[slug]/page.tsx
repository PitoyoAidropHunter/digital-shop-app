import Navbar from "@/app/components/Navbar/page";
import ProductCard from "@/app/components/products/ProductCard";
import products from "@/data/products";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const filtered = products.filter(
    (product) => product.category === params.slug
  );

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-secondary py-5 px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10">
          {filtered.map((product) => (
            <div key={product.id} className="text-primary text-center">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
