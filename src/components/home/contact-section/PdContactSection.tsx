import PdContactWithCaptcha from "./PdContactWithCaptcha";
import PdContactWithoutCaptcha from "./PdContactWithoutCaptcha";
import { Grid, Stack } from "@mui/material";
import { personalData } from "../../../api/personalData";
import PdSectionHeader from "../../section-header/PsSectionHeader";
import { useTranslation } from "react-i18next";
import { PdContactInfo } from "./components";
import PdLabel from "../../common/PdLabel";

export default function PdContactSection() {
  const { t } = useTranslation();

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
          {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY &&
          process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY ? (
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
