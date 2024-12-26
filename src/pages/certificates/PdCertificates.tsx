import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PdCertificationsSections from "../../components/home/certificates/PdCertificationsSections";

export default function PdCertifications() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("common.homePageTitle")}</title>
      </Helmet>
      <Container maxWidth="xl">
        <PdCertificationsSections />
      </Container>
    </>
  );
}
