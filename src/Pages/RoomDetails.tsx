import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "../components/Button";

const RoomDetails = () => {
  return (
    <div className="bg-gray-400 p-6 rounded-lg shadow-lg mt-10">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-700">Products</h1>
        <Button
          icon={<AddIcon />}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          label="Add Product"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 bg-slate-900 rounded-lg shadow-md">
          <thead>
            <tr className="text-white border-b border-gray-300">
              <th className="py-3 px-6 text-left text-sm font-semibold border-b border-gray-300">
                S.No.
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold border-b border-gray-300">
                Product Name
              </th>
              <th className="py-3 px-6 text-left text-sm font-semibold border-b border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row */}
            <tr className="text-gray-100 border-b border-gray-300">
              <td className="py-4 px-6 border-r border-gray-300">1</td>
              <td className="py-4 px-6 first-letter:uppercase border-r border-gray-300">
                Product Name
              </td>
              <td className="py-4 px-6 flex space-x-4">
                <button className="text-green-500 hover:text-green-700 transition">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700 transition">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-gray-100 border-b border-gray-300">
              <td className="py-4 px-6 border-r border-gray-300">2</td>
              <td className="py-4 px-6 first-letter:uppercase border-r border-gray-300">
                Another Product
              </td>
              <td className="py-4 px-6 flex space-x-4">
                <button className="text-green-500 hover:text-green-700 transition">
                  Edit
                </button>
                <button className="text-red-500 hover:text-red-700 transition">
                  Delete
                </button>
              </td>
            </tr>
            {/* Additional rows can be added here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomDetails;
