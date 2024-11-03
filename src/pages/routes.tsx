import type { RouteObject } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import PdHome from "./PdHome";
import Page404 from "./404";
import { PATHS } from "./paths";
import PdAbout from "./about/PdAbout";
import PdExperience from "./experience/PdExperience";
import PdContact from "./contact/PdContact";
import PdSkill from "./skills/PdSkill";

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
        path: PATHS.HOME,
        element: <PdHome />,
      },
      {
        path: PATHS.ABOUT,
        element: <PdAbout />,
      },
      {
        path: PATHS.EXPERIENCE,
        element: <PdExperience />,
      },
      {
        path: PATHS.CONTACT,
        element: <PdContact />,
      },
      {
        path: PATHS.SKILLS,
        element: <PdSkill />,
      },
    ],
  },
  {
    path: PATHS.NOT_FOUND,
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
