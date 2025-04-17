import tshirt from "../../public/images/t-shirt.jpg";
import sport from "../../public/images/sport.jpg";
import { StaticImageData } from "next/image";

export interface Category {
  id: number;
  name: string;
  image: StaticImageData;
  slug: string;
}

const category: Category[] = [
  {
    id: 1,
    name: "T-Shirt",
    image: tshirt,
    slug: "t-shirt",
  },
  {
    id: 2,
    name: "Manusia",
    image: sport,
    slug: "manusia",
  },
];

export default category;
