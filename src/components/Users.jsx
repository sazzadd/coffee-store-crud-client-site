import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  console.log(loadedUsers);
  const [user, setUsers] = useState(loadedUsers);
  return (
    <div>
      <h1 className="text-center text-2xl">All users</h1>
    </div>
  );
};

export default Users;
