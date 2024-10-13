import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  alpha,
  useTheme,
  Stack,
  useMediaQuery,
  Theme,
} from "@mui/material";
import PdSwitchTheme from "./components/PdSwitchTheme";
import { PdSwitchLanguage } from "./components/PdSwitchLanguage";
import { useTranslation } from "react-i18next";
import { getTopBarItems } from "../../lib/models/top-bar/topBarItems";
import { PdTopBarMobile } from "./PdTopBarMobile/PdTopBarMobile";
import { PdTopBarDesktop } from "./PdTopBarDesktop/PdTopBarDesktop";

function PdNavbar() {
  const { background, primary } = useTheme().palette;
  const { t } = useTranslation();

  const items = getTopBarItems(t);
  const mdUp = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  // return mdUp ? <PdTopBarDesktop /> : <PdTopBarMobile />;
  return <PdTopBarMobile/>;
}

export default PdNavbar;
