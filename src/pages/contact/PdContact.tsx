import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PdContactSection from "../../components/home/contact-section/PdContactSection";

export default function PdContact() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("common.homePageTitle")}</title>
      </Helmet>
      <Container maxWidth="xl">
        <PdContactSection />
      </Container>
    </>
  );
}
