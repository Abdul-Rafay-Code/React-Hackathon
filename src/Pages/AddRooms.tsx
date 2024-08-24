import React, { useContext, useEffect } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
} from "@mui/material";
import myContext from "../context/MyContext";
import BasicTextFields from "../components/Input";
import BasicButtons from "../components/Button";
import toast from "react-hot-toast";
import Loader from "../components/Loader";
import { addDoc, collection } from "firebase/firestore";
import { firedb } from "../firebase/FirebaseConfig";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const AddRoom: React.FC = () => {
  const { inputFields, setInputFields, loading, setLoading } =
    useContext(myContext);

  const navigate = useNavigate();

  useEffect(() => {
    const id = nanoid(6);
    setInputFields((inputFields: any) => ({ ...inputFields, roomId: id }));
  }, []);

  const addRoom = async () => {
    if (
      !inputFields.roomDescription ||
      !inputFields.roomType ||
      !inputFields.roomStatus ||
      !inputFields.roomPrice ||
      !inputFields.roomNumber ||
      !inputFields.roomImage // Validate the new field
    ) {
      return toast.error("All Fields are Required");
    }
    setLoading(true);
    try {
      const ref = collection(firedb, "Rooms");
      await addDoc(ref, inputFields);
      toast.success("Room Added Successfully");
      setInputFields("");
      navigate("/");
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
      toast.error("Please Check Console");
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {loading && <Loader />}
      <Card className="w-full max-w-4xl p-6 sm:p-8 md:p-10 bg-gray-100 shadow-lg rounded-lg">
        <CardHeader
          title={
            <Typography
              variant="h4"
              component="h2"
              className="font-bold text-gray-800 text-center"
            >
              Add New Room
            </Typography>
          }
          subheader={
            <Typography variant="body2" className="text-gray-600 text-center">
              Enter the details of the new room to add it to your Hotel.
            </Typography>
          }
        />
        <CardContent>
          <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="grid gap-6">
              <BasicTextFields
                label="Room ID"
                type="text"
                className="w-full"
                value={inputFields?.roomId}
                onChange={(e: any) =>
                  setInputFields({ ...inputFields, roomId: e.target.value })
                }
              />
              <BasicTextFields
                label="Room Number"
                type="number"
                className="w-full"
                value={inputFields?.roomNumber || ""}
                onChange={(e: any) =>
                  setInputFields({ ...inputFields, roomNumber: e.target.value })
                }
              />
              <BasicTextFields
                label="Room Type"
                className="w-full"
                select="select"
                type="select"
                value={inputFields?.roomType || ""}
                onChange={(e: any) => {
                  setInputFields({ ...inputFields, roomType: e.target.value });
                }}
                menuItems={[
                  { value: "Single Room", label: "Single Room" },
                  { value: "Double Room", label: "Double Room" },
                  { value: "Quad Room", label: "Quad Room" },
                  { value: "Luxury Room", label: "Luxury Room" },
                ]}
              />
              <div className="grid gap-6 md:grid-cols-2">
                <BasicTextFields
                  label="Room Status"
                  className="w-full"
                  select="select"
                  type="select"
                  value={inputFields?.roomStatus || ""}
                  onChange={(e: any) => {
                    setInputFields({
                      ...inputFields,
                      roomStatus: e.target.value,
                    });
                  }}
                  menuItems={[
                    { value: "Available", label: "Available" },
                    { value: "Booked", label: "Booked" },
                    { value: "Maintenance", label: "Maintenance" },
                  ]}
                />
                <BasicTextFields
                  label="Room Price"
                  className="w-full"
                  type="number"
                  value={inputFields?.roomPrice || ""}
                  onChange={(e: any) =>
                    setInputFields({
                      ...inputFields,
                      roomPrice: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <BasicTextFields
                label="Room Description"
                type="text"
                multiline
                className="w-full"
                rows={5}
                value={inputFields?.roomDescription || ""}
                onChange={(e: any) =>
                  setInputFields({
                    ...inputFields,
                    roomDescription: e.target.value,
                  })
                }
              />
              {/* New Input Field Below Room Description */}
              <BasicTextFields
                label="Room Image"
                type="text"
                className="w-full"
                value={inputFields?.roomImage || ""}
                onChange={(e: any) =>
                  setInputFields({ ...inputFields, roomImage: e.target.value })
                }
              />
              <CardActions className="flex justify-end">
                <BasicButtons
                  label="Add"
                  variant="contained"
                  onClick={addRoom}
                />
              </CardActions>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddRoom;
