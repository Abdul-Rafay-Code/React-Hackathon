import { useContext } from "react";
import myContext from "../context/MyContext";
import Loader from "../components/Loader";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import BedroomParentOutlinedIcon from "@mui/icons-material/BedroomParentOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import { useNavigate } from "react-router-dom";
import RoomDetails from "./RoomDetails";
import BookingDetails from "./BookingDetails";
import UserDetails from "./UserDetails";
import Table from "../components/Table";
import CustomizedTables from "../components/Table";

const AdminDashboard = () => {
  const { state, loading } = useContext(myContext);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-800 via-slate-900 to-slate-700 py-10">
      {/* Top */}
      <div className="mb-8 px-5">
        <div className="bg-slate-600 py-6 border border-slate-700 rounded-lg shadow-lg">
          <h1 className="text-center text-3xl font-bold text-white">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-5">
        {/* Mid */}
        <div className="mb-8">
          <div className="bg-slate-600 py-6 rounded-xl border border-slate-700 shadow-lg">
            {/* Image */}
            <div className="flex justify-center mb-4">
              {loading ? (
                <Loader />
              ) : (
                <img
                  src={state?.profilepicture}
                  alt="Admin"
                  className="w-24 h-24 rounded-full shadow-md"
                />
              )}
            </div>
            {/* Text */}
            <div className="text-center">
              <h1 className="text-xl font-bold text-white mb-2">
                Name: {state?.username}
              </h1>
              <h1 className="text-xl font-bold text-white">
                Role: {state?.role}
              </h1>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div>
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-slate-600 hover:bg-slate-500 transition duration-200 border-slate-700 px-6 py-6 rounded-xl shadow-lg">
                  <div className="text-white w-14 h-14 mb-3 inline-block">
                    <BedroomParentOutlinedIcon fontSize="large" />
                  </div>
                  <h2 className="title-font font-medium text-4xl text-white mb-2">
                    10
                  </h2>
                  <p className="text-white font-bold">All Rooms</p>
                </div>
              </Tab>

              {/* Total Orders */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-slate-600 hover:bg-slate-500 transition duration-200 border-slate-700 px-6 py-6 rounded-xl shadow-lg">
                  <div className="text-white w-14 h-14 mb-3 inline-block">
                    <EventAvailableOutlinedIcon fontSize="large" />
                  </div>
                  <h2 className="title-font font-medium text-4xl text-white mb-2">
                    10
                  </h2>
                  <p className="text-white font-bold">Total Booking</p>
                </div>
              </Tab>

              {/* Total Users */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer">
                <div className="border bg-slate-600 hover:bg-slate-500 transition duration-200 border-slate-700 px-6 py-6 rounded-xl shadow-lg">
                  <div className="text-white w-14 h-14 mb-3 inline-block">
                    <PersonPinOutlinedIcon fontSize="large" />
                  </div>
                  <h2 className="title-font font-medium text-4xl text-white mb-2">
                    10
                  </h2>
                  <p className="text-white font-bold">Total Users</p>
                </div>
              </Tab>
            </TabList>
            <TabPanel>
              <RoomDetails />
            </TabPanel>
            <TabPanel>
              <BookingDetails />
            </TabPanel>
            <TabPanel>
              <UserDetails />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
