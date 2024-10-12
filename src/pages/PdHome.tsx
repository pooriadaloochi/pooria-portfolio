import PdBlogs from "../components/home/blog/PdBlogs";
import PdContactSection from "../components/home/contact-section/PdContactSection";
import PdEducation from "../components/home/education/PdEducation";
import PdAboutSection from "../components/home/PdAboutSectoin";
import PdExperience from "../components/home/PdExperience";
import PdHeroSection from "../components/home/hero-section/PdHeroSection";
import PdSkills from "../components/home/skills/PdSkills";
import PdProjects from "../components/home/projects/projects";
import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

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
        {/* <PdExperience /> */}
        <PdSkills />
        {/* <PdProjects /> */}
        {/* <PdEducation /> */}
        {/* <PdBlogs blogs={[]} /> */}
        <PdContactSection />
      </Container>
    </>
  );
}
