import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllToys from "../pages/AllToys/AllToys";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import AddToy from "../pages/AddToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/MyToys/MyToys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "allToys/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://wonder-toys-server.vercel.app/allToys/${params.id}`),
      },
      {
        path: "addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://wonder-toys-server.vercel.app/allToys/${params.id}`),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

export default router;
