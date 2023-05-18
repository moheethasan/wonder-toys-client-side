import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { TfiCar } from "react-icons/tfi";

const NavBar = () => {
  const user = false;

  return (
    <nav className="bg-black px-2 py-5">
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-1 title-text text-base md:text-2xl font-bold">
          WonderToys{" "}
          <TfiCar className="text-violet-500 text-base md:text-2xl" />
        </h2>
        <div className="flex gap-1 md:gap-5">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/blog"
          >
            All Toys
          </NavLink>
          {user && (
            <>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/blog"
              >
                My Toys
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/blog"
              >
                Add A Toy
              </NavLink>
            </>
          )}
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "default")}
            to="/blog"
          >
            Blog
          </NavLink>
        </div>
        {user ? (
          <div className="flex gap-1 md:gap-3 items-center">
            <div
              className="tooltip tooltip-bottom"
              data-tip={user.displayName ? user.displayName : "name not found"}
            >
              {user.photoURL ? (
                <img
                  className="w-10 md:w-14 rounded-full"
                  src={user.photoURL}
                  alt="user photo"
                />
              ) : (
                <FaUserCircle className="text-3xl md:text-4xl" />
              )}
            </div>
            <button className="btn-primary">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="btn-primary">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
