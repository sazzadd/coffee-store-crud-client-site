import React from "react";
import Swal from "sweetalert2";
const AddCoffe = () => {
  const handleAddCoffe = (event) => {
    event.preventDefault();

    const form = event.target;

    const coffeeName = form.coffeeName.value;
    const coffeeQuantity = form.coffeeQuantity.value;
    const coffeeSupplier = form.coffeeSupplier.value;
    const coffeeTaste = form.coffeeTaste.value;
    const coffeeCategory = form.coffeeCategory.value;
    const coffeeDetails = form.coffeeDetails.value;
    const coffeePhoto = form.coffeePhoto.value;
    const newCoffee = {
      coffeeName,
      coffeeQuantity,
      coffeeSupplier,
      coffeeTaste,
      coffeeCategory,
      coffeeDetails,
      coffeePhoto,
    };
    console.log(newCoffee);
    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Coffe addeed successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Add New Coffee
        </h2>
        <p className="text-center text-gray-500 mb-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffe}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 mb-2">Name</label>
              <input
                type="text"
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
                name="coffeeQuantity"
                placeholder="Enter coffee Quantity"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Supplier</label>
              <input
                type="text"
                name="coffeeSupplier"
                placeholder="Enter coffee supplier"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Taste</label>
              <input
                type="text"
                name="coffeeTaste"
                placeholder="Enter coffee taste"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Category</label>
              <input
                type="text"
                name="coffeeCategory"
                placeholder="Enter coffee category"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-2">Details</label>
              <input
                type="text"
                name="coffeeDetails"
                placeholder="Enter coffee details"
                className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <label className="block text-gray-600 mb-2">Photo</label>
              <input
                type="text"
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
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffe;
