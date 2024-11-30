import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const List = (
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to="/" className="text-white">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/addcoffe" className="text-white">
          Add Coffes
        </NavLink>
      </li>
      <li>
        <NavLink to="/users" className="text-white">
          Users
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div
      className="navbar bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/p2SFZGd/15.jpg')",
      }}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/" className="text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/phones" className="text-white">
                Add Coffes
              </NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden font-bold lg:flex">{List}</div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavBar;
