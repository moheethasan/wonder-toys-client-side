import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import swal from "sweetalert";

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

  const handleDelete = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/deleteToy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              swal("Poof! Your toy data has been deleted!", {
                icon: "success",
              });
              const remaining = myToys.filter((toy) => toy._id != _id);
              setMyToys(remaining);
            }
          });
      } else {
        swal("Don't worry your toys are safe!");
      }
    });
  };

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
            <MyToysRow
              key={toys._id}
              toys={toys}
              index={index}
              handleDelete={handleDelete}
            ></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
