import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import MoonLoader from "react-spinners/ClipLoader";

const PrivetRoute = ({ children }) => {

  const { user, loading } = useContext(AuthContext);
  const location = useLocation();


  if (loading) {

   return <div className="text-center mt-52"><MoonLoader
      color="#36d7b7"
      aria-label="Loading Spinner"
      data-testid="loader" />
    </div>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivetRoute;