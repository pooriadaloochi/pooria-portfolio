import { Box, Button, Link, useTheme, Grid, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import { PdCoderCard } from "@components/coder/PdCoderCard";
import { personalData } from "@api/personalData";
import { coderData } from "@api/coderData";
import { PdHeroIcon } from "@components/icons/PdHeroIcon";

export function PdHeroSection() {
  const { primary, secondary } = useTheme().palette;

  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        py: { xs: 4, lg: 12 },
        px: { xs: 2, lg: 10 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-100px",
          zIndex: -10,
          width: "100%",
        }}
      >
        <PdHeroIcon
          primaryColor={primary.light}
          secondaryColor={secondary.light}
        />
      </Box>

      <Grid container spacing={2} justifyContent="space-between">
        {/* Left Section */}
        <Grid
          item
          xs={12}
          lg={5}
          sx={{
            order: { xs: 2, lg: 1 },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            p: 2,
            pb: { xs: 20, md: 10 },
            pt: { lg: 10 },
            fontSize: { xs: "1.25rem", lg: "1.5rem" },
          }}
        >
          <Typewriter
            options={{
              strings: [
                t("introData.animated.first"),
                t("introData.animated.second"),
                t("introData.animated.third"),
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />
          <Box sx={{ my: 6, display: "flex", alignItems: "center", gap: 2 }}>
            {[
              {
                href: personalData.github,
                icon: <GitHubIcon fontSize="large" />,
              },
              {
                href: personalData.linkedIn,
                icon: <LinkedInIcon fontSize="large" />,
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                sx={{
                  color: "primary.main",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.25)",
                  },
                }}
              >
                {item.icon}
              </Link>
            ))}
            <Link href="#contact" underline="none">
              <Button
                fullWidth
                variant="contained"
                color="inherit"
                sx={{
                  minWidth: "170px",
                  mt: -2,
                }}
              >
                <Stack
                  flexDirection="row"
                  width="100%"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <ContactMailIcon />
                  {t("introData.contactMe")}
                </Stack>
              </Button>
            </Link>
          </Box>
        </Grid>
        {/* Right Section */}

        <Grid item xs={12} lg={5} sx={{ order: { xs: 1, lg: 2 } }}>
          <PdCoderCard data={coderData} title="developer" />
        </Grid>
      </Grid>
    </Box>
  );
}
