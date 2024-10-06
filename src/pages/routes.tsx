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
    element: <>401</>,
  },
  {
    path: "404",
    element: <>404</>,
  },
  {
    path: "500",
    element: <>500</>,
  },
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
];
