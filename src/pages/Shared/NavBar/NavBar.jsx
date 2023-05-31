import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { TfiCar } from "react-icons/tfi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="navbar bg-black px-2 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 px-4 py-2 shadow bg-gradient-to-r from-blue-500 to-violet-600 rounded-lg w-40"
            >
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "default")}
                to="/allToys"
              >
                All Toys
              </NavLink>
              {user && (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to="/myToys"
                  >
                    My Toys
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }
                    to="/addToy"
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
            </ul>
          </div>
          <h2 className="flex items-center gap-1 title-text text-base md:text-2xl font-bold">
            WonderToys{" "}
            <TfiCar className="text-violet-500 text-base md:text-2xl" />
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 md:gap-5">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "default")}
              to="/allToys"
            >
              All Toys
            </NavLink>
            {user && (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/myToys"
                >
                  My Toys
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                  to="/addToy"
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
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-1 md:gap-3 items-center">
              <div
                className="tooltip tooltip-bottom"
                data-tip={
                  user.displayName ? user.displayName : "name not found"
                }
              >
                {user.photoURL ? (
                  <img
                    className="w-8 md:w-12 rounded-full"
                    src={user.photoURL}
                    alt="user photo"
                  />
                ) : (
                  <FaUserCircle className="text-3xl md:text-4xl" />
                )}
              </div>
              <button onClick={handleLogOut} className="btn-primary">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
