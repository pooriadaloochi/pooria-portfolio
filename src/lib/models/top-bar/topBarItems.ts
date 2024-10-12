import { TFunction } from "i18next";
import { TopBarItems } from "./topBarItems.types";

export function getTopBarItems(t: TFunction): TopBarItems[] {
  return [
    {
      href: "/about",
      label: t("topBar.items.about"),
    },
    {
      href: "/experience",
      label: t("topBar.items.experience"),
    },
    {
      href: "/skills",
      label: t("topBar.items.skills"),
    },
    {
      href: "/education",
      label: t("topBar.items.education"),
    },
    {
      href: "/blogs",
      label: t("topBar.items.blogs"),
    },
    {
      href: "/projects",
      label: t("topBar.items.projects"),
    },
  ];
}
