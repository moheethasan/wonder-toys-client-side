import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysRow = ({ toys, index }) => {
  const {
    _id,
    available_quantity,
    name,
    price,
    picture,
    sub_category,
    rating,
    detail_description,
  } = toys || {};

  return (
    <tr>
      <td className="font-medium">{index + 1}</td>
      <td>
        <img className="w-16" src={picture} alt="car" />
      </td>
      <td className="font-medium">{name}</td>
      <td className="font-medium">{sub_category}</td>
      <td className="font-medium">{detail_description.slice(0, 20)}...</td>
      <td className="font-medium">{price}$</td>
      <td className="font-medium text-center">{available_quantity}</td>
      <td className="font-medium text-center">{rating}</td>
      <td>
        <div className="flex gap-3 items-center">
          <Link to={`/updateToy/${_id}`}>
            <FaEdit className="text-2xl text-violet-600" />
          </Link>
          <button>
            <FaTrash className="text-xl text-violet-600" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyToysRow;
