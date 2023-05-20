import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myToys?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, []);

  return (
    <div className="container mx-auto overflow-x-auto py-20">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-16">
        <span className="title-text">My Toys</span>
      </h1>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th className="text-base">No.</th>
            <th className="text-base">Picture</th>
            <th className="text-base">Toy Name</th>
            <th className="text-base">Sub-category</th>
            <th className="text-base">Description</th>
            <th className="text-base">Price</th>
            <th className="text-base">Available Quantity</th>
            <th className="text-base">Rating</th>
            <th className="text-base">Action</th>
          </tr>
        </thead>
        <tbody>
          {myToys?.map((toys, index) => (
            <MyToysRow key={toys._id} toys={toys} index={index}></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
