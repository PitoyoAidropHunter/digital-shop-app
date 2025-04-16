import Navbar from "../components/Navbar/page";
import Image from "next/image";
import sample from "../../../public/images/sample.jpg";
import Footer from "../components/Footer/page";
import category from "@/data/category";
import CategoryCard from "../components/products/CategoryCard";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col poppins-light">
        <Navbar />
        <div className="min-h-screen px-6 lg:px-20 text-primary flex flex-col bg-secondary">
          <div className=" text-primary flex h-72 py-4 rounded-lg">
            <Image src={sample} alt="" className="rounded-lg" />
          </div>
          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-semibold my-4 lg:my-8">
              Produk Digital
            </h1>
            <p className="text-sm md:text-lg font-light mb-8">
              1.778 desain, ilustrasi, dan elemen grafis yang inspiratif dari
              para desainer terbaik di dunia. Ingin lebih banyak inspirasi?
              Jelajahi hasil pencarian kami.
            </p>
          </div>

          <div className="my-24">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
              Category
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-10 mt-5 md:mt-10">
              {category.map((category) => (
                <CategoryCard key={category.id} category={category} />
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
