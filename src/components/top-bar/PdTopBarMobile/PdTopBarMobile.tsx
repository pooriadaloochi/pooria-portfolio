import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  alpha,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Stack,
  Theme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import PdSwitchTheme from "../components/PdSwitchTheme";
import { PdSwitchLanguage } from "../components/PdSwitchLanguage";
import { getTopBarItems } from "../../../lib/models/top-bar/topBarItems";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

export function PdTopBarMobile() {
  const { background, primary } = useTheme().palette;
  const { t } = useTranslation();
  const items = getTopBarItems(t);

  // State to manage mobile drawer open/close
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Media query for mobile view
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  // Function to toggle drawer
  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {items.map((item) => (
          <ListItem button key={item.label} component="a" href={item.href}>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <PdSwitchLanguage />
      </List>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: alpha(background.paper, 0.2),
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 2 }}>
        <Box>
          <Link href="/" underline="none">
            <Typography
              variant="h4"
              sx={{ color: primary.main, fontWeight: "bold" }}
            >
              {t("topBar.logo")}
            </Typography>
          </Link>
        </Box>

        <Stack flexDirection="row" gap={3} alignItems="center">
          <PdSwitchTheme />
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
          >
            {drawerList}
          </Drawer>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
