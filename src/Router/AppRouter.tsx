import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../Register/SignUp";
import Login from "../Register/Login";
import { Toaster } from "react-hot-toast";
import Rooms from "../Pages/Rooms";
import MyState from "../context/MyState";
import UserDashboard from "../Pages/User";
import Home from "../Home";
import CartPage from "../Pages/Cart";
import AdminDashboard from "../Pages/Admin";
import { ProtectedRouteForAdmin } from "../ProtectedRoute/ProtectedRouteForAdmin";
import NoPage from "../Pages/NoPage";
import { ProtectedRouteForUser } from "../ProtectedRoute/ProtectedRouteForUSer";
import AddRoom from "../Pages/AddRooms";
import UpdateRoom from "../Pages/UpdateRoom";
function AppRouter() {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route
            path="/addRoom"
            element={
              <ProtectedRouteForAdmin>
                <AddRoom />
              </ProtectedRouteForAdmin>
            }
          />
          <Route path="/updateRoom" element={<UpdateRoom />} />
          <Route
            path="/cart"
            element={
              <ProtectedRouteForUser>
                <CartPage />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/user-dashboard"
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </MyState>
  );
}

export default AppRouter;
