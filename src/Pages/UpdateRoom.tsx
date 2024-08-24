import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const UpdateRoom: React.FC = () => {
  const [roomNumber, setRoomNumber] = useState<number | "">("");
  const [roomType, setRoomType] = useState<string>("");
  const [roomSize, setRoomSize] = useState<number | "">("");
  const [amenities, setAmenities] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleUpdateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Room added:", {
      roomNumber,
      roomType,
      roomSize,
      amenities,
      description,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/path-to-your-sky-background-image.jpg')] bg-cover bg-center opacity-50"></div>
      <Card className="relative max-w-4xl w-full mx-auto p-6 sm:p-8 md:p-10 bg-white shadow-lg rounded-lg">
        <CardHeader
          title={
            <Typography
              variant="h4"
              component="h2"
              className="font-bold text-gray-800"
            >
              Add New Room
            </Typography>
          }
          subheader={
            <Typography variant="body2" className="text-gray-600">
              Enter the details of the new room to add it to your property.
            </Typography>
          }
        />
        <CardContent>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 relative"
            onSubmit={handleUpdateRoom}
          >
            <div className="grid gap-4">
              <TextField
                label="Room Number"
                type="number"
                variant="outlined"
                value={roomNumber}
                onChange={(e) =>
                  setRoomNumber(
                    e.target.value === "" ? "" : Number(e.target.value)
                  )
                }
                placeholder="101"
                fullWidth
              />
              <TextField
                select
                label="Room Type"
                variant="outlined"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                placeholder="Select room type"
                fullWidth
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="double">Double</MenuItem>
                <MenuItem value="suite">Suite</MenuItem>
                <MenuItem value="penthouse">Penthouse</MenuItem>
              </TextField>
              <div className="grid grid-cols-2 gap-4">
                <TextField
                  label="Room Size (sq ft)"
                  type="number"
                  variant="outlined"
                  value={roomSize}
                  onChange={(e) =>
                    setRoomSize(
                      e.target.value === "" ? "" : Number(e.target.value)
                    )
                  }
                  placeholder="350"
                  fullWidth
                />
                <TextField
                  label="Amenities"
                  variant="outlined"
                  value={amenities}
                  onChange={(e) => setAmenities(e.target.value)}
                  placeholder="Jacuzzi, Balcony, etc."
                  fullWidth
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <TextField
                label="Room Description"
                variant="outlined"
                multiline
                rows={5}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe the room..."
                fullWidth
              />
              <CardActions className="flex justify-end">
                <Button type="submit" variant="contained" color="primary">
                  Add Room
                </Button>
              </CardActions>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateRoom;
