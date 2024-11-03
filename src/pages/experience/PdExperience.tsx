import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PdExperiencesSection from "../../components/home/experience-section/PdExperiences";

export default function PdExperience() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("common.homePageTitle")}</title>
      </Helmet>
      <Container maxWidth="xl">
        <PdExperiencesSection />
      </Container>
    </>
  );
}
