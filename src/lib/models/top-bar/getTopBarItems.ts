import { TFunction } from "i18next";
import { PATHS } from "@pages/paths";
import { TopBarItemsType } from "./topBarItems.types";

export function getTopBarItems(t: TFunction): TopBarItemsType[] {
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
