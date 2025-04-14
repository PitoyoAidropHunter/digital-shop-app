import sample from "../../public/images/sample.jpg";
import sample2 from "../../public/images/sample2.jpg";
import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: StaticImageData;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Kacang tanah enak",
    description: "Description for digital product 1.",
    price: 10,
    image: sample,
    category: "kacang-tanah-enak",
  },
  {
    id: 2,
    name: "manusia super",
    description: "Description for digital product 2.",
    price: 10,
    image: sample2,
    category: "manusia",
  },
];

export default products;
