import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const toy = useLoaderData();
  const {
    available_quantity,
    name,
    price,
    seller_name,
    seller_email,
    picture,
    detail_description,
    rating,
  } = toy || {};

  return (
    <div className="px-2 py-20">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-16">
        <span className="title-text">Toy Details</span>
      </h1>
      <div className="bg-black container mx-auto flex flex-col-reverse lg:flex-row justify-center items-center gap-10 md:gap-20 px-4 md:px-8 lg:px-20 py-14 md:py-20 lg:py-28 rounded-lg">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-8">
            <span className="title-text">{name}</span>
          </h2>
          <p className="text-lg mb-6 text-slate-300">{detail_description}</p>
          <div className="flex justify-between items-center mb-1">
            <p className="text-lg font-medium text-slate-300">
              Price: <span className="title-text">{price}$</span>
            </p>
            <p className="text-lg font-medium text-slate-300">
              Available Quantity:{" "}
              <span className="title-text">{available_quantity}</span>
            </p>
          </div>
          <p className="text-lg font-medium text-slate-300 mb-1">
            Seller Name: <span className="title-text">{seller_name}</span>
          </p>
          <p className="text-lg font-medium text-slate-300 mb-1">
            Seller Email: <span className="title-text">{seller_email}</span>
          </p>
          <div className="flex justify-between items-center mt-auto">
            <span className="flex items-center text-lg font-semibold">
              <Rating style={{ maxWidth: 130 }} value={rating} readOnly />{" "}
              <span className="title-text">{rating}</span>
            </span>
          </div>
        </div>
        <img className="rounded-lg w-full" src={picture} alt="car" />
      </div>
    </div>
  );
};

export default ToyDetails;
