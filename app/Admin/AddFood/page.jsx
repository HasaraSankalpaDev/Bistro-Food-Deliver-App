import React from "react";

const page = () => {
  return (
    <div>
      <div className="mt-4">
        <h2 className="text-2xl font-medium">Add Food Item</h2>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          doloremque ipsam sapiente.
        </p>
      </div>
      <div className="w-1/2 mt-5">
        <form>
          <div className="my-4">
            <label htmlFor="">Item Name</label>
            <input
              type="text"
              className="bg-gray-100 py-3 px-4 mt-3 w-full"
              placeholder="Enter Food Item Name"
            />
          </div>
          <div className="my-4">
            <label htmlFor="">Item Description</label>

            <textarea
              rows={3}
              type="text"
              className="bg-gray-100 py-3 px-4 mt-3 w-full border-none"
              placeholder="Enter Food Item Description"
            />
          </div>
          <div className="my-4">
            <label htmlFor="">Item Price</label>

            <div className="flex items-center bg-gray-100 mt-3 px-4 w-full">
              <span className="text-gray-700 mr-2">$</span>{" "}
              {/* Currency operator */}
              <input
                type="number"
                className="bg-gray-100 flex-grow py-3 px-4 w-full border-none"
                placeholder="Enter Price"
                min="0"
                step="0.01"
              />
            </div>
          </div>
          <div className="my-4">
            <label htmlFor="">Item Image</label>

            <input
              type="file"
              className="py-3 px-4 bg-gray-100  w-full mt-3"
              placeholder="Food Item Image  "
            />
          </div>
          <label htmlFor="">Item Category</label>
          <div className="">
            <select className=" mt-4 px-4 py-3 border bg-gray-100 w-1/2">
              <option value="Salads">Salads</option>
              <option value="Desserts">Desserts</option>
              <option value="Sandwiches">Sandwiches</option>
              <option value="Cakes">Cakes</option>
              <option value="Juce">Juce</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div className="mt-6">
            <button className="w-full py-3 px-4 bg-black text-white hover:shadow-lg">
              Add Food Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
