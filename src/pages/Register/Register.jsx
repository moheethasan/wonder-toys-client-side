import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const [error, setError] = useState("");

  const { signUp, editProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      signUp(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          if (name || photo) {
            editProfile(name, photo)
              .then(() => {
                toast.success("User profile updated");
              })
              .catch((error) => {
                console.log(error);
              });
          }
          form.reset();
          logOut();
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          setError(error.code.replace("auth/", ""));
        });
    }
  };

  return (
    <div className="hero mt-20">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-4xl text-center font-bold pt-5 pb-8">Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered border-2"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold label-text">Email Address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="input input-bordered border-2"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="font-semibold label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo url"
              className="input input-bordered border-2"
            />
          </div>
          <div className="form-control mt-3">
            <span className="label-text font-semibold title-text mb-2">
              {error}
            </span>
            <input className="btn-primary" type="submit" value="Register" />
            <label className="label flex justify-center">
              <span className="label-text font-semibold">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-sm font-semibold label-text-alt link link-hover title-text"
                >
                  Login
                </Link>
              </span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
