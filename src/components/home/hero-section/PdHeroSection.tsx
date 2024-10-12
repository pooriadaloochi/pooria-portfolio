import { Box, Button, Link, useTheme, Grid, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { personalData } from "../../../api/personalData";
import PdCoderCard from "../../coder/PdCoder";
import Typewriter from "typewriter-effect";
import HeroIcon from "../../icons/HeroIcon";
import { coderData } from "../../../api/coderData";
import { useTranslation } from "react-i18next";

export default function PdHeroSection() {
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
        <HeroIcon
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
          {/* <Link href={personalData.resume} target="_blank" underline="none">
              <Button
                variant="contained"
                endIcon={<DownloadIcon />}
                sx={{
                  backgroundImage: gradients.primary,
                  px: { xs: 3, md: 8 },
                  py: { xs: 1, md: 2 },
                  color: "white",
                  borderRadius: "50px",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease-out",
                  "&:hover": {
                    backgroundImage: gradients.secondary,
                    gap: 3,
                  },
                }}
              >
                Get Resume
              </Button>
            </Link> */}
        </Grid>
        {/* Right Section */}

        <Grid item xs={12} lg={5} sx={{ order: { xs: 1, lg: 2 } }}>
          <PdCoderCard data={coderData} title="developer" />
        </Grid>
      </Grid>
    </Box>
  );
}
