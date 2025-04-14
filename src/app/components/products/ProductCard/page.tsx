import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <div>
      <Image className="rounded-lg" src={product.image} alt={product.name} />
      <h2 className="font-semibold text-lg mt-2">{product.name}</h2>
      <p className="text-sm text-gray-400">{product.description}</p>
      <p>price Rp {product.price.toLocaleString()}</p>
      <button className="mt-4 font-semibold cursor-pointer">
        Beli Sekarang
      </button>
    </div>
  );
};

export default CardProduct;
