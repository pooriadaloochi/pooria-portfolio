import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
// Components
import { PdCertificationsSections } from "@components/home/certificates/PdCertificationsSections";

export function PdCertificatesPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("common.homePageTitle")}</title>
      </Helmet>
      <Container maxWidth="xl" sx={{ mt: 20 }}>
        <PdCertificationsSections />
      </Container>
    </>
  );
}
