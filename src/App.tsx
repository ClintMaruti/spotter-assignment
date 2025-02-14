import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { routeObject } from "./routes";

const App: React.FC = () => {
  const router = createBrowserRouter(routeObject);
  return <RouterProvider router={router} />;
};

export default App;
