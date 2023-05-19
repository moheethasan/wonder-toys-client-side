import { FaArrowRight } from "react-icons/fa";
import banner from "../../../assets/banner.jpg";

const Banner = () => {
  return (
    <header className="relative mb-20">
      <img className="w-full" src={banner} alt="banner" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 md:mb-5 font-black text-white">
          Welcome to WonderToys!
        </h1>
        <h3 className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-2 md:mb-5 text-white font-semibold">
          Your ultimate destination for all things car toys! Step into a world
          of imagination and adventure as we bring you a wide range of
          captivating and exciting toy cars.
        </h3>
        <button className="btn-primary">
          <span className="flex items-center gap-1">
            Explore More <FaArrowRight />
          </span>
        </button>
      </div>
    </header>
  );
};

export default Banner;
