import React from "react";
import { alpha, Box, Typography, useTheme } from "@mui/material";
import PdGradientDivider from "../../common/PdGradiantDivider";
import { useTranslation } from "react-i18next";

export default function PdSkillsHeader() {
  const { primary } = useTheme().palette;
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        position: "relative",
        py: 6,
        bgcolor: "background.paper",
        textAlign: "center",
      }}
    >
      <PdGradientDivider top="50%" />
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          px: 3,
          py: 1,
          bgcolor: "primary.dark",
          borderRadius: 1,
          boxShadow: `0 0 20px ${alpha(primary.main, 0.5)}`,
          zIndex: 1,
        }}
      >
        <Typography variant="h6" color="white">
          {t("topBar.items.skills")}
        </Typography>
      </Box>
    </Box>
  );
}
