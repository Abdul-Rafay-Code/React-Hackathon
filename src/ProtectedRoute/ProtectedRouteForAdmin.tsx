import { useContext } from "react";
import { Navigate } from "react-router-dom";
import myContext from "../context/MyContext";

export function ProtectedRouteForAdmin({ children }: any) {
  const { state } = useContext(myContext);
  if (state?.role == "admin") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
