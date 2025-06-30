import React from "react";
import ReactDOM from "react-dom/client";
import Random from "./components/Random";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import RootLayout from "./components/RootLayout";
import ContactProvider from "./components/ContactContext";
import ContactEdit from "./components/ContactEdit";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <ContactForm />,
      },
      {
        path: "list",
        element: <ContactList />,
      },
      {
        path:"/edit",
        element: <ContactEdit />
      }
    ],
  },
]);

root.render(
  <ContactProvider>
    <RouterProvider router={AppRouter} />
  </ContactProvider>
);
