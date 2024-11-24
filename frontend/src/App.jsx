import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import User from "./getUser/User";
import AddUser from "./addUser/AddUser";
import Update from "./updateUser/Update";
const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path:'/add',
      element:<AddUser/>
    },
    {
      path:"/update/:id",
      element:<Update/>
    }
  ]);
  return (
    <div className="App">
    <RouterProvider router={route}> </RouterProvider>
    </div>
  );
};

export default App;
