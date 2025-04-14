import sample from "../../public/images/sample.jpg";
import sample2 from "../../public/images/sample2.jpg";
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
    name: "Kacang tanah enak",
    image: sample,
    slug: "kacang-tanah-enak",
  },
  {
    id: 2,
    name: "Manusia",
    image: sample2,
    slug: "manusia",
  },
];

export default category;
