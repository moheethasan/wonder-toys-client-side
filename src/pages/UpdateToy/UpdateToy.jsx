import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, price, available_quantity, detail_description } = toy || {};

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.price = parseFloat(data.price);
    data.available_quantity = parseInt(data.available_quantity);
    fetch(`https://wonder-toys-server.vercel.app/updateToy/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal("Done!", "Toy updated successfully!", "success");
          navigate("/myToys");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Wonder Toys | Update Toy</title>
      </Helmet>
      <div className="container mx-auto px-2 py-20">
        <h1 className="text-center text-4xl md:text-5xl font-bold pb-16">
          <span className="title-text">Update Toy Information</span>
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="shadow-2xl bg-base-100 p-14 rounded-lg w-4/5 mx-auto"
        >
          <div className="md:flex gap-10">
            <div className="w-full form-control">
              <label className="label">
                <span className="font-semibold label-text">Price</span>
              </label>
              <input
                {...register("price")}
                type="text"
                pattern="^\d+(\.\d{1,2})?$"
                placeholder="0.00"
                required
                defaultValue={price}
                className="input input-bordered border-2"
              />
            </div>
            <div className="w-full form-control">
              <label className="label">
                <span className="font-semibold label-text">
                  Available Quantity
                </span>
              </label>
              <input
                {...register("available_quantity")}
                type="text"
                pattern="^\d+$"
                placeholder="0"
                required
                defaultValue={available_quantity}
                className="input input-bordered border-2"
              />
            </div>
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">
                Detail Description
              </span>
            </label>
            <textarea
              {...register("detail_description")}
              type="text"
              rows={3}
              defaultValue={detail_description}
              placeholder="Detail description"
              required
              className="resize-none rounded-xl border-gray-300 border-2 px-4 py-2"
            />
          </div>
          <input
            className="btn-primary btn-block mt-6"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateToy;
