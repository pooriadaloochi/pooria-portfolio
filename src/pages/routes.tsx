import type { RouteObject } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
// Layout
import { Layout } from "@components/layout/layout";
// Pages
import { PdHomePage } from "@pages/PdHomePage/PdHomePage";
import { PdAboutPage } from "@pages/PdAboutPage/PdAboutPage";
import { PdSkillPage } from "@pages/PdSkillPage/PdSkillPage";
import { PdExperiencePage } from "@pages/PdExperiencePage/PdExperiencePage";
import { PdCertificatesPage } from "@pages/PdCertificatesPage/PdCertificatesPage";
import { PdContactPage } from "@pages/PdContactPage/PdContactPage";
import { Page404 } from "./404";
// Paths
import { PATHS } from "@pages/paths";

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
        element: <PdHomePage />,
      },
      {
        path: PATHS.ABOUT,
        element: <PdAboutPage />,
      },
      {
        path: PATHS.SKILLS,
        element: <PdSkillPage />,
      },
      {
        path: PATHS.EXPERIENCE,
        element: <PdExperiencePage />,
      },
      {
        path: PATHS.CERTIFICATES,
        element: <PdCertificatesPage />,
      },
      {
        path: PATHS.CONTACT,
        element: <PdContactPage />,
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
