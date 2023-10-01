import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./layout/Main";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import SignIn from "./components/login/SignIn";
import SignUp from "./components/login/SignUp";
import ForgotPass from "./components/login/ForgotPass";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/loginauto",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPass />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
