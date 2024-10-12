import type { RouteObject } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import PdHome from "./PdHome";

export const routes: RouteObject[] = [
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    // Partner Pages
    children: [
      {
        path: "/",
        element: <PdHome />,
      },
    ],
  },
  // Common Pages
  {
    path: "401",
    element: <Layout>401</Layout>,
  },
  {
    path: "404",
    element: <Layout>404</Layout>,
  },
  {
    path: "500",
    element: <Layout>500</Layout>,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];
