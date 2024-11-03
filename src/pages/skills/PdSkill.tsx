import { Container } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PdSkillsSection from "../../components/home/skills/PdSkillsSection";

export default function PdSkill() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("common.homePageTitle")}</title>
      </Helmet>
      <Container maxWidth="xl">
        <PdSkillsSection />
      </Container>
    </>
  );
}
