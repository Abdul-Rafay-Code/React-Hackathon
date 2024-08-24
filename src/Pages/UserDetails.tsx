import React from "react";

const UserDetails = () => {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      uid: "123",
      role: "Admin",
      date: "2024-08-16",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      uid: "456",
      role: "User",
      date: "2024-08-15",
    },
    // Add more users here
  ];

  return (
    <div>
      <div>
        <div className="py-5 flex justify-between items-center">
          {/* text  */}
          <h1 className="text-xl text-pink-300 font-bold">All Users</h1>
        </div>

        {/* table  */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border border-collapse sm:border-separate border-pink-100 text-pink-400">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="h-12 px-4 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                >
                  S.No.
                </th>
                <th
                  scope="col"
                  className="h-12 px-4 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="h-12 px-4 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="h-12 px-4 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                >
                  Uid
                </th>
                <th
                  scope="col"
                  className="h-12 px-4 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                >
                  Role
                </th>
                <th
                  scope="col"
                  className="h-12 px-4 text-md border-l first:border-l-0 border-pink-100 text-slate-700 bg-slate-100 font-bold"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id} className="text-pink-300">
                  <td className="h-12 px-4 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {index + 1}.
                  </td>
                  <td className="h-12 px-4 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {user.name}
                  </td>
                  <td className="h-12 px-4 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {user.email}
                  </td>
                  <td className="h-12 px-4 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {user.uid}
                  </td>
                  <td className="h-12 px-4 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {user.role}
                  </td>
                  <td className="h-12 px-4 text-md border-t border-l first:border-l-0 border-pink-100 text-slate-500">
                    {user.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
