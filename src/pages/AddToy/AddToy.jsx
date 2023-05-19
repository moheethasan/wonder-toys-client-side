import { useForm } from "react-hook-form";

const AddToy = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mx-auto px-2 py-20">
      <h1 className="text-center text-4xl md:text-5xl font-bold pb-16">
        <span className="title-text">Add A Toy</span>
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-2xl bg-base-100 p-14 rounded-lg w-4/5 mx-auto"
      >
        <div className="flex gap-10">
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Toy name"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="number"
              placeholder="Price"
              required
              className="input input-bordered border-2"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Sub-category</span>
            </label>
            <select
              {...register("sub_category")}
              className="input input-bordered border-2"
            >
              <option value="Monster Truck">Monster Truck</option>
              <option value="Regular Car">Regular Car</option>
              <option value="Ambulance Car">Ambulance Car</option>
              <option value="Police Car">Police Car</option>
            </select>
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Rating</span>
            </label>
            <input
              {...register("rating")}
              type="number"
              placeholder="Rating"
              required
              className="input input-bordered border-2"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Photo URL</span>
            </label>
            <input
              {...register("picture")}
              type="url"
              placeholder="Photo URL"
              required
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
              type="number"
              placeholder="Quantity"
              required
              className="input input-bordered border-2"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Seller Name</span>
            </label>
            <input
              {...register("seller_name")}
              type="text"
              placeholder="Seller name"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="w-full form-control">
            <label className="label">
              <span className="font-semibold label-text">Seller Email</span>
            </label>
            <input
              {...register("seller_email")}
              type="email"
              placeholder="Seller Email"
              required
              className="input input-bordered border-2"
            />
          </div>
        </div>
        <div className="w-full form-control">
          <label className="label">
            <span className="font-semibold label-text">Detail Description</span>
          </label>
          <textarea
            {...register("detail_description")}
            type="text"
            rows={3}
            placeholder="Detail description"
            required
            className="resize-none rounded-xl border-gray-300 border-2 px-4 py-2"
          />
        </div>
        <input className="btn-primary btn-block mt-6" type="submit" />
      </form>
    </div>
  );
};

export default AddToy;
