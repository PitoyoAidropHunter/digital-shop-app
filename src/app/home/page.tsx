import products from "@/data/products";
import Navbar from "../components/Navbar/page";
import CardProduct from "../components/products/ProductCard/page";
import Image from "next/image";
import sample from "../../../public/images/sample.jpg";
import Footer from "../components/Footer/page";
import CardCategory from "../components/products/CategoryCard/page";
import category from "@/data/category";
import { Link } from "lucide-react";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col poppins-light">
        <Navbar />
        <div className="min-h-screen px-10 lg:px-20 text-primary flex flex-col bg-secondary">
          <div className=" text-primary flex h-72 py-4 rounded-lg">
            <Image src={sample} alt="" className="rounded-lg" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold mt-8 mb-8">
              Digital Product
            </h1>
            <p>
              1,778 inspirational designs, illustrations, and graphic elements
              from the world’s best designers. Want more inspiration? Browse our
              search results
            </p>
          </div>

          <div className="my-24">
            <h1 className="text-4xl font-semibold">Category</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10">
              {category.map((category) => (
                <CardCategory key={category.id} category={category} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
