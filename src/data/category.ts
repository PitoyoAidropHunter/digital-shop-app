import streetwear from "../../public/images/category/streetwear-graphics.jpg";
import memeArt from "../../public/images/category/meme-art.jpg";
import culture from "../../public/images/category/culture.jpg";
import grunge from "../../public/images/category/grunge.jpg";
import minimalist from "../../public/images/category/minimalist.jpg";
import nature from "../../public/images/category/nature.jpg";
import retro from "../../public/images/category/retro.jpg";
import typography from "../../public/images/category/typography.jpg";
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
    name: "Streetwear Graphics",
    image: streetwear,
    slug: "streetwear-graphics",
  },
  {
    id: 2,
    name: "Meme Art",
    image: memeArt,
    slug: "meme-art",
  },
  {
    id: 3,
    name: "Culture",
    image: culture,
    slug: "meme-art",
  },
  {
    id: 4,
    name: "Grunge",
    image: grunge,
    slug: "grunge",
  },
  {
    id: 5,
    name: "Minimalist",
    image: minimalist,
    slug: "minimalist",
  },
  {
    id: 6,
    name: "Nature",
    image: nature,
    slug: "nature",
  },
  {
    id: 7,
    name: "Retro",
    image: retro,
    slug: "retro",
  },
  {
    id: 8,
    name: "Typography",
    image: typography,
    slug: "typography",
  },
];

export default category;
