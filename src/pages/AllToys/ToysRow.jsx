import { Link } from "react-router-dom";

const ToysRow = ({ product, index }) => {
  const {
    _id,
    available_quantity,
    name,
    price,
    seller_name,
    picture,
    sub_category,
  } = product || {};
  return (
    <tr>
      <td className="font-medium">{index + 1}</td>
      <td>
        <img className="w-16 rounded-md" src={picture} alt="car" />
      </td>
      <td className="font-medium">{name}</td>
      <td className="font-medium">{seller_name}</td>
      <td className="font-medium">{sub_category}</td>
      <td className="font-medium">{price}$</td>
      <td className="font-medium text-center">{available_quantity}</td>
      <td>
        <Link to={`/allToys/${_id}`}>
          <button className="btn-outlined">View Details</button>
        </Link>
      </td>
    </tr>
  );
};

export default ToysRow;
