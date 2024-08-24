import React, { useContext, useState, useEffect } from "react";
import myContext from "../context/MyContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firedb } from "../firebase/FirebaseConfig";
import { query, collection, where, getDocs } from "firebase/firestore";
import Loader from "../components/Loader";
import BasicTextFields from "../components/Input";

const Login: React.FC = () => {
  const context = useContext(myContext);
  const { loading, setLoading, state, setState } = context;
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Users") || "{}");
    if (user?.role === "admin") {
      navigate("/admin-dashboard");
    } else if (user?.role === "user") {
      navigate("/user-dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );

      const userUid = userCredential.user.uid;
      const q = query(collection(firedb, "Users"), where("uid", "==", userUid));

      const querySnapshot = await getDocs(q);
      let user: any;
      querySnapshot.forEach((doc) => (user = doc.data()));

      if (user) {
        localStorage.setItem("Users", JSON.stringify(user));
        setState({ ...state, role: user.role }); // Update context state

        if (user.role === "user") {
          navigate("/user-dashboard");
        } else {
          navigate("/admin-dashboard");
        }
        toast.success("Login Successful");
      } else {
        toast.error("User data not found");
      }
    } catch (error: any) {
      console.error("Login error:", error); // Debugging
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600">
      {loading && <Loader />}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <BasicTextFields
            type="email"
            label="Email"
            value={userDetails.email}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e: any) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />

          <BasicTextFields
            label="Password"
            type="password"
            value={userDetails.password}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e: any) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <Button
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
            onClick={handleLogin}
            label="Login"
            variant="contained"
          />
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
