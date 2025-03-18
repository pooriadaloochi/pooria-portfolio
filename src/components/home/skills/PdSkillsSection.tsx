import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import PdSkillSlider from "./PdSkillSlider";
import { PdSectionHeader } from "@components/common/PsSectionHeader/PsSectionHeader";

export function PdSkillsSection() {
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
