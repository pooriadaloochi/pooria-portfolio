import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import PdLabel from "../common/PdLabel";

const ProfileImage = styled("img")({
  width: 280,
  borderRadius: "8px",
  objectFit: "scale-down",
  transition: "all 1s",
  cursor: "pointer",
  "&:hover": {
    filter: "grayscale(0%)",
    transform: "scale(1.1)",
  },
});

export default function PdAboutSection() {
  const { t } = useTranslation();
  return (
    <Box
      id="about"
      display="flex"
      flexDirection="row"
      alignItems="center"
      sx={{
        my: { xs: 12, lg: 16 },
        px: { xs: 2, lg: 10 },
      }}
    >
      {/* About Section Content */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 4, lg: 16 },
        }}
      >
        {/* Text Section */}
        <Box sx={{ order: { xs: 2, lg: 1 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "medium",
              mb: 2,
              color: "primary.light",
              textTransform: "uppercase",
            }}
          >
            {t("about.introduction.title")}
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.875rem", lg: "1.125rem" } }}>
            {t("about.introduction.description")}
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            order: { xs: 1, lg: 2 },
            mt: -4,
          }}
        >
          <ProfileImage
            src={"/Profile_Transparent.png"}
            alt={t("about.introduction.title")}
          />
        </Box>
      </Box>
      {/* Vertical ABOUT ME label */}
      <PdLabel title={t("about.title")} />
    </Box>
  );
}
