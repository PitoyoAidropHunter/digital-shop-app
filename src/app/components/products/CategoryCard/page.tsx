import { Link } from "lucide-react";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  return (
    <a
      href={`products/category/${category.slug}`}
      className="flex flex-col items-center "
    >
      <div className="w-64 h-40 overflow-hidden rounded-xl shadow-lg">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          src={category.image}
          alt={category.name}
        />
      </div>
      <h2 className=" text-xl mt-5">{category.name}</h2>
    </a>
  );
};

export default CardCategory;
