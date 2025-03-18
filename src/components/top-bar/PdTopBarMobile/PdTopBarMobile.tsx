import { useState } from "react";
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
} from "@mui/material";
import { useTranslation } from "react-i18next";
import MenuIcon from "@mui/icons-material/Menu";
import { getTopBarItems } from "@models/top-bar/getTopBarItems";
import { PdSwitchLanguage } from "../components/PdSwitchLanguage";
import { PdSwitchTheme } from "../components/PdSwitchTheme";
import { useLocation } from "react-router-dom";

export function PdTopBarMobile() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { background, primary } = useTheme().palette;
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const items = getTopBarItems(t);

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
          <ListItem
            key={item.label}
            component="a"
            href={item.href}
            sx={{
              "&:hover": { backgroundColor: alpha(primary.main, 0.2) },
              backgroundColor:
                pathname === item.href
                  ? alpha(primary.main, 0.2)
                  : "transparent",
              color: pathname === item.href ? primary.light : primary.main,
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <Box sx={{ mt: 2 }}>
          <PdSwitchLanguage />
        </Box>
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
