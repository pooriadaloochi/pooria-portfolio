import Box from "@mui/material/Box";
import PdSkillSlider from "./PdSkillSlider";
import PdSectionHeader from "../../section-header/PsSectionHeader";
import { useTranslation } from "react-i18next";

export default function PdSkillsSection() {
  const { t } = useTranslation();

  return (
    <Box
      id="skills"
      sx={{
        position: "relative",
        zIndex: 50,
        my: { xs: 12, lg: 24 },
      }}
    >
      <PdSectionHeader title={t("topBar.items.skills")} />
      <PdSkillSlider />
    </Box>
  );
}
