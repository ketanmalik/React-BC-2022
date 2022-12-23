import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home.js";
import ErrorComponent from "./Components/ErrorComponent.js";
import Header from "./Components/Header.js";
import UserDetails from "./Components/UserDetails.js";

const AppLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
