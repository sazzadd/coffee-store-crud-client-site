import { createBrowserRouter } from "react-router-dom";
import AddCoffe from "../components/AddCoffe";
import AuthLayout from "../components/Auth/AuthLayout";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ErrorPage from "../components/ErrorPage";
import MainLayout from "../components/MainLayout";
import UpdateCoffe from "../components/UpdateCoffe";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    loader: () => fetch("http://localhost:5000/coffee"),
  },
  {
    path: "/addcoffe",
    element: <AddCoffe></AddCoffe>,
  },
  {
    path: "/updatecoffe/:id",
    element: <UpdateCoffe></UpdateCoffe>,
    // loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login", // /auth/login path
        element: <Login></Login>,
      },
      {
        path: "register", // /auth/register path
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch("http://localhost:5000/users"),
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
