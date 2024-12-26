import { TFunction } from "i18next";
import { TopBarItems } from "./topBarItems.types";
import { PATHS } from "../../../pages/paths";

export function getTopBarItems(t: TFunction): TopBarItems[] {
  return [
    {
      href: PATHS.HOME,
      label: t("topBar.items.home"),
    },
    {
      href: PATHS.ABOUT,
      label: t("topBar.items.about"),
    },
    {
      href: PATHS.EXPERIENCE,
      label: t("topBar.items.experience"),
    },
    {
      href: PATHS.SKILLS,
      label: t("topBar.items.skills"),
    },
    // {
    //   href: "/education",
    //   label: t("topBar.items.education"),
    // },
    // {
    //   href: "/blogs",
    //   label: t("topBar.items.blogs"),
    // },
    // {
    //   href: "/projects",
    //   label: t("topBar.items.projects"),
    // },
    {
      href: PATHS.CERTIFICATES,
      label: t("topBar.items.certificates"),
    },
    {
      href: PATHS.CONTACT,
      label: t("topBar.items.contact"),
    },
  ];
}
