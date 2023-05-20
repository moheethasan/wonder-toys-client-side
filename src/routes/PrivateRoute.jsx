import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import swal from "sweetalert";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center my-20">
        <button className="btn loading">loading</button>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    swal("Unauthorized user!", "You have to login first!", "warning");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
