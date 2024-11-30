import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffe = () => {
  const coffee = useLoaderData();
  console.log("Fetched Coffee Data:", coffee);
  const {
    _id,
    coffeeName,
    coffeeQuantity,
    coffeeSupplier,
    coffeeTaste,
    coffeeCategory,
    coffeeDetails,
    coffeePhoto,
  } = coffee;

  const handleUpdateCoffe = (event) => {
    event.preventDefault();

    const form = event.target;

    const coffeeName = form.coffeeName.value;
    const coffeeQuantity = form.coffeeQuantity.value;
    const coffeeSupplier = form.coffeeSupplier.value;
    const coffeeTaste = form.coffeeTaste.value;
    const coffeeCategory = form.coffeeCategory.value;
    const coffeeDetails = form.coffeeDetails.value;
    const coffeePhoto = form.coffeePhoto.value;
    const updatedCoffee = {
      coffeeName,
      coffeeQuantity,
      coffeeSupplier,
      coffeeTaste,
      coffeeCategory,
      coffeeDetails,
      coffeePhoto,
    };
    console.log(updatedCoffee);
    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "updated Coffee !",
            text: "Coffe Updated uccessfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-3xl bg-white shadow-md rounded-md p-6">
          <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
            {coffeeName}
          </h2>
          <p className="text-center text-gray-500 mb-8">update here</p>
          <form onSubmit={handleUpdateCoffe}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  defaultValue={coffeeName}
                  name="coffeeName"
                  placeholder="Enter coffee name"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">
                  Available Quantity
                </label>
                <input
                  type="text"
                  defaultValue={coffeeQuantity}
                  name="coffeeQuantity"
                  placeholder="Enter coffee Quantity"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Supplier</label>
                <input
                  type="text"
                  defaultValue={coffeeSupplier}
                  name="coffeeSupplier"
                  placeholder="Enter coffee supplier"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Taste</label>
                <input
                  type="text"
                  defaultValue={coffeeTaste}
                  name="coffeeTaste"
                  placeholder="Enter coffee taste"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Category</label>
                <input
                  type="text"
                  defaultValue={coffeeCategory}
                  name="coffeeCategory"
                  placeholder="Enter coffee category"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Details</label>
                <input
                  type="text"
                  defaultValue={coffeeDetails}
                  name="coffeeDetails"
                  placeholder="Enter coffee details"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>
              <div className="col-span-1 md:col-span-2">
                <label className="block text-gray-600 mb-2">Photo</label>
                <input
                  type="text"
                  defaultValue={coffeePhoto}
                  name="coffeePhoto"
                  placeholder="Enter photo URL"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-white py-2 rounded-md hover:bg-[#b9986e] transition duration-300"
            >
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffe;
