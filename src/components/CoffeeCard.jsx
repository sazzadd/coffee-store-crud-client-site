import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
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

  const handleDelete = (_id) => {
    Swal.fire({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
        console.log("delete suceess");
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              console.log(data);
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
    console.log(_id);
  };

  return (
    <div className="p-4 my-2 bg-[#F5F5F5] rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-6 lg:gap-8">
      {/* Coffee Image */}
      <img
        src={coffeePhoto}
        alt="Coffee Cup"
        className="w-32 h-32 rounded-lg object-cover"
      />

      {/* Coffee Details */}
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">
          Name: <span className="font-medium">{coffeeName}</span>
        </h3>
        <p className="text-gray-600 mt-2">
          Available: <span className="font-medium">{coffeeQuantity}</span>
        </p>
        <p className="text-gray-600 mt-2">
          Price: <span className="font-medium">890 Taka</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3">
        <button className="p-3 rounded-full bg-[#D2B48C] text-white text-lg flex items-center justify-center shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:opacity-95">
          <FaEye />
        </button>
        <Link to={`updatecoffe/${_id}`}>
          <button className="p-3 rounded-full bg-[#3C393B] text-white text-lg flex items-center justify-center shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:opacity-95">
            <FaPen />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="p-3 rounded-full bg-[#EA4744] text-white text-lg flex items-center justify-center shadow-md transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:opacity-95"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
