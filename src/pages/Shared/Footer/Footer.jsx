import { TfiCar } from "react-icons/tfi";
import social from "../../../assets/group.png";
import { FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black mt-20 pt-20 pb-10 px-2 text-gray-600">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-20">
        <div>
          <h2 className="flex items-center gap-1 text-lg md:text-2xl font-bold mb-3">
            <span className="title-text">WonderToys</span>
            <TfiCar className="text-violet-500 text-lg md:text-2xl" />
          </h2>
          <p className="mb-4">
            Ignite imagination, spark adventure. WonderToys offers a captivating
            collection of high-quality car toys for endless playtime fun.
            Explore, imagine, and race ahead with WonderToys.
          </p>
          <img className="mb-4" src={social} alt="social link" />
        </div>
        <div className="md:px-20">
          <h3 className="text-xl font-bold mb-5 text-white">Useful Links</h3>
          <p className="mb-4">Home</p>
          <p className="mb-4">Products</p>
          <p className="mb-4">About Us</p>
          <p className="mb-4">FAQs</p>
          <p className="mb-4">Contact Us</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-5 text-white">Contact</h3>
          <p className="mb-1">info@wondertoys.com</p>
          <p className="mb-1">+880-123456789, +880-123412349</p>
          <p className="mb-1">Available: Sat - Thu, 10:00 AM To 7:00 PM</p>
          <p className="mb-1">123 ABC Road, Dhaka, Bangladesh</p>
          <div className="flex mt-4">
            <input
              className="border-0 rounded-l-xl w-full md:w-3/4 p-4"
              type="email"
              placeholder="Email Address"
            />
            <button className="transition duration-200 px-3 md:px-5 py-3 md:py-4 text-white hover:bg-red-500 bg-red-400 border-0 rounded-r-xl text-sm md:text-base bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700">
              <FaPaperPlane className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
      <p className="text-center pt-16 pb-10">
        <small>Copyright © 2023 WonderToys. All rights reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
