import PdBlogs from "../components/home/blog/PdBlogs";
import PdContactSection from "../components/home/contact-section/PdContactSection";
import PdEducation from "../components/home/education/PdEducation";
import PdAboutSection from "../components/home/PdAboutSection";
import PdHeroSection from "../components/home/hero-section/PdHeroSection";
import PdSkillsSection from "../components/home/skills/PdSkillsSection";
import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PdExperiencesSection from "../components/home/experience-section/PdExperiences";

export default function PdHome() {
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
        {/* <PdEducation /> */}
        {/* <PdBlogs blogs={[]} /> */}
        <PdContactSection />
      </Container>
    </>
  );
}
