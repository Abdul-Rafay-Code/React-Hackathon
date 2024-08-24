import React, { useContext, useState } from "react";
import Button from "../components/Button";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, storage, firedb } from "../firebase/FirebaseConfig";
import myContext from "../context/MyContext";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import BasicTextFields from "../components/Input";

const Signup: React.FC = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;
  const navigate = useNavigate();

  const [userDetails, setUserDetails] = useState({
    email: "",
    userName: "",
    password: "",
    role: "admin",
  });

  const [profile, setProfile] = useState<File | any>();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !userDetails.userName ||
      !userDetails.email ||
      !userDetails.password ||
      !profile
    ) {
      toast.error("All fields are required");
      return;
    }
    setLoading(true);
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userDetails.email,
        userDetails.password
      );

      const imageRef = ref(storage, `profilePicture/${profile.name}`);
      await uploadBytes(imageRef, profile);
      const url = await getDownloadURL(imageRef);

      const userData = {
        username: userDetails.userName,
        email: users.user.email,
        uid: users.user.uid,
        role: userDetails.role,
        time: Timestamp.now(),
        profilepicture: url,
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      const reference = collection(firedb, "Users");
      await addDoc(reference, userData);

      toast.success("Signup Successful");
      setUserDetails({
        userName: "",
        email: "",
        password: "",
        role: "user",
      });
      setProfile(null);
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Failed to Signup");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600">
      {loading && <Loader />}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
          Sign Up
        </h2>
        <form onSubmit={handleSignup}>
          <BasicTextFields
            type="text"
            id="name"
            label="Username"
            value={userDetails.userName}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e: any) =>
              setUserDetails({ ...userDetails, userName: e.target.value })
            }
          />
          <BasicTextFields
            type="email"
            label="Email"
            id="email"
            value={userDetails.email}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e: any) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          <BasicTextFields
            type="password"
            label="Password"
            id="password"
            value={userDetails.password}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e: any) =>
              setUserDetails({ ...userDetails, password: e.target.value })
            }
          />
          <BasicTextFields
            type="file"
            label=""
            id="filename"
            onChange={(e: any) => {
              if (e.target.files && e.target.files.length > 0) {
                setProfile(e.target.files[0]);
              }
            }}
          />

          <Button
            label="Signup"
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-200"
            variant="contained"
            onClick={handleSignup}
          />
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
