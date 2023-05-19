import { useEffect, useState } from "react";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allToys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto overflow-x-auto py-20">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-16">
        <span className="title-text">All Toys</span>
      </h1>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="text-base">No.</th>
            <th className="text-base">Toy Name</th>
            <th className="text-base">Seller</th>
            <th className="text-base">Sub-category</th>
            <th className="text-base">Price</th>
            <th className="text-base">Available Quantity</th>
            <th className="text-base">Details</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <ToysRow
              key={product._id}
              product={product}
              index={index}
            ></ToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
