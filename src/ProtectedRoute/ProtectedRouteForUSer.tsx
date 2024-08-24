import { useContext } from "react";
import { Navigate } from "react-router-dom";
import myContext from "../context/MyContext";

export function ProtectedRouteForUser({ children }: any) {
  const { state } = useContext(myContext);
  if (state?.role == "user") {
    return children;
  } else {
    return <Navigate to={"/login"} />;
  }
}
