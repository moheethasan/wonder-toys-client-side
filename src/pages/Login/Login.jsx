import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const { signIn, googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // email password login
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.code.replace("auth/", ""));
      });
  };

  // google login
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero mt-20">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-4xl text-center font-bold pt-5 pb-8">Login</h1>
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
          <div className="form-control mt-3">
            <span className="label-text font-semibold title-text mb-2">
              {error}
            </span>
            <input className="btn-primary" type="submit" value="Login" />
            <label className="label flex justify-center">
              <span className="label-text font-semibold">
                Don&#39;t have an account?{" "}
                <Link
                  to="/register"
                  className="text-sm font-semibold label-text-alt link link-hover title-text"
                >
                  Register
                </Link>
              </span>
            </label>
          </div>
          <div className="form-control">
            <fieldset className="border-t-2 border-gray-400 mt-2 mb-4">
              <legend className="mx-auto px-4 text-gray-400 text-xl font-semibold">
                or
              </legend>
            </fieldset>
          </div>
          <div onClick={handleGoogleLogin} className="form-control">
            <span className="flex justify-center items-center gap-1 bg-white text-black border-2 btn hover:bg-blue-500 hover:text-white hover:border-0">
              <FcGoogle className="text-2xl" /> Continue with Google
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
