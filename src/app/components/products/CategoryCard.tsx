import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

interface Category {
  id: number;
  name: string;
  image: StaticImageData;
  slug: string;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link
      href={`products/category/${category.slug}`}
      className="flex flex-col items-center"
    >
      <div className="w-44 h-30 md:w-64 md:h-40 overflow-hidden rounded-xl shadow-lg">
        <Image
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          src={category.image}
          alt={category.name}
        />
      </div>
      <h2 className="text-lg md:text-xl mt-5">{category.name}</h2>
    </Link>
  );
};

export default CategoryCard;
