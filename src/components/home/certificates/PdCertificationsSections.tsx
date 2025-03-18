import { Box, useTheme, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
// Components
import { PdSectionHeader } from "@components/common/PsSectionHeader/PsSectionHeader";
import { PdImagePreview } from "@components/common/PdImagePreview";
// API
import { certifications } from "@api/personalData";

export function PdCertificationsSections({
  certificatesNumber,
}: {
  certificatesNumber?: number;
}) {
  const { t } = useTranslation();
  const { primary } = useTheme().palette;

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
      <PdSectionHeader title={t("common.certifications.title")} />

      <Grid container spacing={2} p={3}>
        {certifications.slice(0, certificatesNumber).map((certification) => (
          <Grid item xs={12} lg={4} key={certification.title}>
            <Stack
              alignItems="center"
              sx={{
                backgroundColor: "background.paper",
                borderRadius: 4,
                boxShadow: 3,
                p: 1,
              }}
            >
              <Typography
                variant="h4"
                display="inline"
                sx={{ color: primary.main, fontWeight: "bold" }}
              >
                {certification.title}
              </Typography>
              <PdImagePreview
                imageUrl={certification.image}
                alt={certification.title}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
