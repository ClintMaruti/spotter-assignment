import { RouteObject } from "react-router-dom";
import { Home } from "@/page/Home";
import { MainLayout } from "@/layouts/MainLayout";

export const routeObject: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];
