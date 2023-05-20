import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";

const ToyCategory = ({ toy }) => {
  const { _id, name, picture, price, rating, available_quantity } = toy || {};

  return (
    <div className="card card-compact bg-base-100 shadow-xl flex flex-col">
      <figure>
        <img className="w-full h-80 md:h-64 xl:h-80" src={picture} alt="car" />
      </figure>
      <div className="card-body">
        <h2 className="text-xl font-bold mb-3">
          <span className="title-text">{name}</span>
        </h2>
        <div className="flex justify-between items-center mb-2">
          <p className="text-base font-medium text-slate-900">
            Price: <span className="title-text">{price}$</span>
          </p>
          <p className="text-base font-medium text-slate-900 text-end">
            Available Quantity:{" "}
            <span className="title-text">{available_quantity}</span>
          </p>
        </div>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex justify-between items-center">
            <span className="flex items-center text-base font-semibold">
              <Rating style={{ maxWidth: 130 }} value={rating} readOnly />{" "}
              <span className="title-text">{rating}</span>
            </span>
          </div>
          <Link to={`/allToys/${_id}`}>
            <button className="btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCategory;
