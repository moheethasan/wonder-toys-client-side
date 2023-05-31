import {
  FaMedal,
  FaShoppingBag,
  FaRegUserCircle,
  FaShippingFast,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-16">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-3 mt-12">
        <span className="title-text">Our Services</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
          <figure className="text-5xl px-10 pt-10">
            <FaMedal />
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-bold text-center">
              Official Manufacturer Shop
            </h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
          <figure className="text-5xl px-10 pt-10">
            <FaShoppingBag />
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-bold text-center">Largest selection</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
          <figure className="text-5xl px-10 pt-10">
            <FaRegUserCircle />
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-bold text-center">Personal service</h2>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up">
          <figure className="text-5xl px-10 pt-10">
            <FaShippingFast />
          </figure>
          <div className="card-body">
            <h2 className="text-lg font-bold text-center">Fast delivery</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
