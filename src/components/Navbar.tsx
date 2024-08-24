import { Link, useNavigate } from "react-router-dom";
import myContext from "../context/MyContext";
import { useContext } from "react";

const Navbar = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const user = JSON.parse(localStorage.getItem("Users"));
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear("Users");
    navigate("/login");
  };
  // navList Data
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      {/* Home */}
      <li>
        <Link to={"/"}>Home</Link>
      </li>

      {/* All Product */}
      <li>
        <Link to={"/rooms"}>Rooms</Link>
      </li>

      {/* Signup */}
      {!user ? (
        <li>
          <Link to={"/signup"}>Signup</Link>
        </li>
      ) : (
        ""
      )}

      {!user ? (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      ) : (
        ""
      )}

      {/* User */}
      {user?.role == "user" ? (
        <li>
          <Link to={"/user-dashboard"}>U-Dasboard</Link>
        </li>
      ) : (
        ""
      )}

      {user?.role == "admin" ? (
        <li>
          <Link to={"/admin-dashboard"}>Admin</Link>
        </li>
      ) : (
        ""
      )}

      {/* Admin */}
      {/* <li>
                <Link to={'/'}>Admin</Link>
            </li> */}

      {/* logout */}
      {user ? (
        <li onClick={logout}>
          <Link to={""}>Logout</Link>
        </li>
      ) : (
        ""
      )}

      {/* Cart */}
      <li>
        <Link to={"/cart"}>Cart(0)</Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-slate-600 sticky top-0">
      {/* main  */}
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        {/* left  */}
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className=" font-bold text-white text-2xl text-center">
              Hotel Management System
            </h2>
          </Link>
        </div>

        {/* right  */}
        <div className="right flex justify-center mb-4 lg:mb-0">{navList}</div>
      </div>
    </nav>
  );
};

export default Navbar;
