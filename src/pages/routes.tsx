import type { RouteObject } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import PdHome from "./PdHome";
import Page404 from "./404";

export const routes: RouteObject[] = [
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    // Pages
    children: [
      {
        path: "/",
        element: <PdHome />,
      },
    ],
  },
  {
    path: "404",
    element: (
      <Layout>
        <Page404 />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];
