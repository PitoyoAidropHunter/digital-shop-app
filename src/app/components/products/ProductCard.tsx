import Image from "next/image";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      <Image className="rounded-lg" src={product.image} alt={product.name} />
      <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
      <p className="text-sm text-gray-400">{product.description}</p>
      <p>price Rp {product.price.toLocaleString()}</p>
      <button className="mt-4 font-semibold cursor-pointer">
        Let's Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
