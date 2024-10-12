import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StackOverflowIcon from "@mui/icons-material/Help";
import PdContactWithCaptcha from "./PdContactWithCaptcha";
import PdContactWithoutCaptcha from "./PdContactWithoutCaptcha";
import { Box, Typography, IconButton, Grid, Divider } from "@mui/material";
import { personalData } from "../../../api/personalData";
import { Link } from "react-router-dom";

export default function PdContactSection() {
  return (
    <Box id="contact" my={12} mt={24} color="white">
      <Grid container alignItems="center">
        <Grid item xs={12} lg={6}>
          {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
          process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ? (
            <PdContactWithCaptcha />
          ) : (
            <PdContactWithoutCaptcha />
          )}
        </Grid>

        <Grid item xs={12} lg={6} position="relative" sx={{direction:"ltr"}}>
          <Box display="flex" flexDirection="column" gap={4}>
            <Box display="flex" alignItems="center" gap={3}>
              <AlternateEmailIcon
                sx={{
                  backgroundColor: "primary.main",
                  p: 1,
                  borderRadius: "50%",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#16f2b3",
                    transform: "scale(1.1)",
                  },
                  color: "white",
                  cursor: "pointer",
                }}
                fontSize="large"
              />
              <Typography color="textPrimary" variant="body1">
                {personalData.email}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={3}>
              <PhoneIcon
                sx={{
                  backgroundColor: "primary.main",
                  p: 1,
                  borderRadius: "50%",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#16f2b3",
                    transform: "scale(1.1)",
                  },
                  color: "white",
                  cursor: "pointer",
                }}
                fontSize="large"
              />
              <Typography color="textPrimary" variant="body1">
                {personalData.phone}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={3}>
              <LocationOnIcon
                sx={{
                  backgroundColor: "primary.main",
                  p: 1,
                  borderRadius: "50%",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#16f2b3",
                    transform: "scale(1.1)",
                  },
                  color: "white",
                  cursor: "pointer",
                }}
                fontSize="large"
              />
              <Typography color="textPrimary" variant="body1">
                {personalData.address}
              </Typography>
            </Box>
          </Box>

          <Box mt={8} display="flex" gap={3}>
            <Link to={personalData.github} target="_blank">
              <IconButton
                sx={{
                  backgroundColor: "primary.main",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#16f2b3",
                    transform: "scale(1.1)",
                  },
                  color: "white",
                }}
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Link>

            <Link to={personalData.linkedIn} target="_blank">
              <IconButton
                sx={{
                  backgroundColor: "primary.main",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#16f2b3",
                    transform: "scale(1.1)",
                  },
                  color: "white",
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Link>

            <Link to={personalData.stackOverflow} target="_blank">
              <IconButton
                sx={{
                  backgroundColor: "primary.main",
                  transition: "all 0.3s",
                  "&:hover": {
                    backgroundColor: "#16f2b3",
                    transform: "scale(1.1)",
                  },
                  color: "white",
                }}
              >
                <StackOverflowIcon fontSize="large" />
              </IconButton>
            </Link>
          </Box>
          {/* <Box
            display={{ lg: "flex", xs: "none" }}
            flexDirection="column"
            alignItems="center"
            position="absolute"
            top={24}
          >
            <Typography
              variant="h6"
              sx={{
                backgroundColor: "#1a1443",
                color: "white",
                transform: "rotate(90deg)",
                p: 2,
                borderRadius: "8px",
                position: "absolute",
                right: 0,
                top: 0,
                textAlign: "center",
              }}
            >
              CONTACT
            </Typography>
            <Divider
              orientation="vertical"
              sx={{ height: 144, backgroundColor: "#1a1443" }}
            />
          </Box> */}
        </Grid>
      </Grid>
    </Box>
  );
}
