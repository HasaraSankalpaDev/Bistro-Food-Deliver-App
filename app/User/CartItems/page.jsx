import React from "react";

const page = () => {
  return (
    <div className="mt-20">
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Users List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Price</th>
                <th className="py-3 px-6 text-left">Quantity</th>
                <th className="py-3 px-6 text-left">Actions</th>
              </tr>
            </thead>
            {/* <UsersTableItems /> */}
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;
