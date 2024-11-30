import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";
import NavBar from "./NavBar";

const MainLayout = () => {
  const LoadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(LoadedCoffees);
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="text-center p-6 text-2xl font-bold text-[#331A15]">
        Our Populer Coffees {coffees.length}
      </h1>
      <div className="w-10/12 mx-auto">
        <div className="grid md:grid-cols-2 gap-3">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
