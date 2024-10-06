import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  alpha,
  useTheme,
} from "@mui/material";
import { personalData } from "../../api/personalData";
import PdSwitchTheme from "./PdSwitchTheme";

function PdNavbar() {
  const { background, primary } = useTheme().palette;

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
              {personalData.name}
            </Typography>
          </Link>
        </Box>

        <Box
          component="ul"
          sx={{
            display: "flex",
            listStyle: "none",
            gap: 2,
            m: 0,
            p: 0,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {[
            { href: "/#about", label: "ABOUT" },
            { href: "/#experience", label: "EXPERIENCE" },
            { href: "/#skills", label: "SKILLS" },
            { href: "/#education", label: "EDUCATION" },
            { href: "/blog", label: "BLOGS" },
            { href: "/#projects", label: "PROJECTS" },
          ].map((item) => (
            <Box key={item.label} component="li" sx={{ listStyle: "none" }}>
              <Link
                href={item.href}
                underline="none"
                sx={{
                  display: "block",
                  px: 2,
                  py: 1,
                  textDecoration: "none",
                  transition: "color 0.3s",
                  "&:hover": { color: primary.light },
                }}
              >
                <Typography sx={{ fontWeight: "medium" }} variant="body2">
                  {item.label}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
        <PdSwitchTheme />
      </Toolbar>
    </AppBar>
  );
}

export default PdNavbar;
