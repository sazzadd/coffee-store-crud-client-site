import { createBrowserRouter } from "react-router-dom";
import AddCoffe from "../components/AddCoffe";
import MainLayout from "../components/MainLayout";
import UpdateCoffe from "../components/UpdateCoffe";

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
]);

export default router;
