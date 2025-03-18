import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
// Components
import { PdContactSection } from "@components/home/contact-section/PdContactSection";

export function PdContactPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("common.homePageTitle")}</title>
      </Helmet>
      <Container maxWidth="xl" sx={{ mt: 20 }}>
        <PdContactSection />
      </Container>
    </>
  );
}
