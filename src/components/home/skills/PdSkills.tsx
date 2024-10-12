import Box from "@mui/material/Box";
import PdSkillsHeader from "./PdSkillsHeader";
import PdSkillSlider from "./PdSkillSlider";

export default function PdSkills() {
  return (
    <Box
      id="skills"
      sx={{
        position: "relative",
        zIndex: 50,
        my: { xs: 12, lg: 24 },
      }}
    >
      <PdSkillsHeader />
      <PdSkillSlider />
    </Box>
  );
}
