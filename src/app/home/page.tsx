import Navbar from "../components/Navbar/page";
import Image from "next/image";
import banner from "../../../public/images/image-banner.png";
import Footer from "../components/Footer/page";
import category from "@/data/category";
import CategoryCard from "../components/products/CategoryCard";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className=" flex flex-col poppins-light">
        <Navbar />
        <div className="min-h-screen px-6 lg:px-20 text-primary flex flex-col bg-secondary">
          <div className="hidden text-secondary bg-indigo-600 mt-6 sm:flex h-[144px] md:h-72 py-4 rounded-lg">
            <div className="ml-40">
              <Image
                src={banner}
                alt="Banner"
                width={300}
                height={300}
                className="relative right-36 md:relative md:right-20"
              />
            </div>
            <div className="relative right-36 md:relative md:right-20 flex flex-col items-start justify-center">
              <h1 className="md:text-4xl text-lg">
                Creative Designs, Affordable Price
              </h1>
              <h5 className="text-lg font-light mt-2">
                Get quality digital products - without breaking the bank
              </h5>
              <Link
                href={""}
                className="bg-gray-800 rounded-full px-8 py-1 mt-2"
              >
                Explore Now
              </Link>
            </div>
          </div>

          <div className="text-secondary bg-indigo-600 mt-6 h-48 py-4 rounded-lg flex sm:hidden">
            <div className="w-1/2">
              <Image src={banner} alt="banner" className="w-full h-[80%]" />
            </div>
            <div className="w-1/2 mr-3">
              <h4 className="text-lg">Creative Designs, Affordable Price</h4>
              <h6 className="text-sm my-2 text-secondary/90">
                Get quality digital products - without breaking the bank
              </h6>
              <Link
                href={""}
                className="text-xs bg-gray-800 mt-2 rounded-full px-4 py-1"
              >
                Explore Now
              </Link>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-xl md:text-3xl font-semibold my-4 lg:my-8">
              Digital Product
            </h1>
            <p className="text-sm md:text-lg font-light mb-8">
              1,778 inspiring designs, illustrations, and graphic elements from
              the world’s top designers. Want more inspiration? Explore our
              search results.
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
