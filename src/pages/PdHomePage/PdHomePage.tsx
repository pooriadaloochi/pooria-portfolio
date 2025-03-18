import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
// Components
import { PdCertificationsSections } from "@components/home/certificates/PdCertificationsSections";
import { PdContactSection } from "@components/home/contact-section/PdContactSection";
import { PdExperiencesSection } from "@components/home/experience-section/PdExperiences";
import { PdHeroSection } from "@components/home/hero-section/PdHeroSection";
import { PdAboutSection } from "@components/home/PdAboutSection";
import { PdSkillsSection } from "@components/home/skills/PdSkillsSection";

export function PdHomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("common.homePageTitle")}</title>
      </Helmet>
      <Container maxWidth="xl">
        <PdHeroSection />
        <PdAboutSection />
        <PdExperiencesSection />
        <PdSkillsSection />
        <PdCertificationsSections certificatesNumber={3} />
        <PdContactSection />
      </Container>
    </>
  );
}
