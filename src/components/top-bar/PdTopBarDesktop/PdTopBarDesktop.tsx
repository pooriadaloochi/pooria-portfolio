import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  alpha,
  useTheme,
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { getTopBarItems } from "@models/top-bar/getTopBarItems";
import { PATHS } from "@pages/paths";
import { PdSwitchTheme } from "../components/PdSwitchTheme";
import { PdSwitchLanguage } from "../components/PdSwitchLanguage";

export function PdTopBarDesktop() {
  const { background, primary, text } = useTheme().palette;
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const items = getTopBarItems(t);

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: alpha(background.paper, 0.2),
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
        <Box>
          <Link component={RouterLink} to={PATHS.HOME} underline="none">
            <Typography
              variant="h4"
              sx={{ color: primary.main, fontWeight: "bold" }}
            >
              {t("topBar.logo")}
            </Typography>
          </Link>
        </Box>

        <Box
          component="ul"
          sx={{
            display: "flex",
            backgroundColor: background.default,
            borderRadius: 8,
            p: 1,
          }}
        >
          {items.map((item) => (
            <Box key={item.label} component="li" sx={{ listStyle: "none" }}>
              <Link
                component={RouterLink}
                to={item.href}
                underline="none"
                sx={{
                  p: 1,
                  mx: 0.3,
                  display: "block",
                  transition: "color 0.3s",
                  "&:hover": { color: primary.light },
                  color: pathname === item.href ? primary.light : text.primary,
                }}
              >
                <Typography sx={{ fontWeight: "medium" }} variant="body2">
                  {item.label}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
        <Stack sx={{ flexDirection: "row" }} gap={3}>
          <PdSwitchTheme />
          <PdSwitchLanguage />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
