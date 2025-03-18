import { Grid, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
// Components
import { PdSectionHeader } from "@components/common/PsSectionHeader/PsSectionHeader";
import { PdContactInfo } from "./components";
import { personalData } from "@api/personalData";
import { PdLabel } from "@components/common/PdLabel";
import { PdContactWithCaptcha } from "./PdContactWithCaptcha";
import { PdContactWithoutCaptcha } from "./PdContactWithoutCaptcha";

export function PdContactSection() {
  const { t } = useTranslation();
  console.log("import.meta.env.process.env", import.meta.env);

  return (
    <Stack id="contact" my={12} mt={24} color="white" spacing={8}>
      <PdSectionHeader title={t("contactMe.title")} />
      <Grid
        container
        alignItems="center"
        spacing={{ lg: 4 }}
        gap={{ xs: 4, lg: 0 }}
      >
        <Grid item xs={12} lg={6}>
          {import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY &&
          import.meta.env.VITE_APP_RECAPTCHA_SECRET_KEY ? (
            <PdContactWithCaptcha />
          ) : (
            <PdContactWithoutCaptcha />
          )}
        </Grid>
        <Grid item xs={12} lg={4} sx={{ direction: "ltr" }}>
          <PdContactInfo {...personalData} />
        </Grid>

        <Grid item xs={0} lg={1} mt={10}>
          <PdLabel title="CONTACT" />
        </Grid>
      </Grid>
    </Stack>
  );
}
