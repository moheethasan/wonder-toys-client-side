import { useEffect, useState } from "react";
import ToysRow from "./ToysRow";
import { Helmet } from "react-helmet";

const AllToys = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://wonder-toys-server.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.toy_name.value;

    fetch(`https://wonder-toys-server.vercel.app/searchToyByName/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        form.reset();
      });
  };

  return (
    <>
      <Helmet>
        <title>Wonder Toys | All Toys</title>
      </Helmet>
      <div className="container mx-auto overflow-x-auto py-20">
        <h1 className="text-center text-4xl md:text-5xl font-bold pb-16">
          <span className="title-text">All Toys</span>
        </h1>
        <form
          onSubmit={handleSearch}
          className="flex justify-center gap-1 mb-10"
        >
          <input
            type="text"
            name="toy_name"
            required
            placeholder="Search your favorite toys"
            className="input input-bordered border-2 w-1/2 md:w-2/5 lg:w-1/4"
          />
          <input type="submit" value="Search" className="btn-primary" />
        </form>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th className="text-base">No.</th>
              <th className="text-base">Picture</th>
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
    </>
  );
};

export default AllToys;
