import { Box } from "@mui/material";
import experienceAnimation from "../../../assets/json/lottie/code.json"; // Adjust path accordingly
import AnimationLottie from "../../helper/animation-lottie";
import { experiences } from "../../../api/personalData";
import PdSectionHeader from "../../section-header/PsSectionHeader";
import PdExperienceItem from "./PdExperienceItem";
import { useTranslation } from "react-i18next";

export default function PdExperiencesSection() {
  const { t } = useTranslation();

  return (
    <Box id="experience">
      <PdSectionHeader title={t("common.experiences.title")} />
      <Box sx={{ py: 8 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
            gap: { xs: 8, lg: 16 },
          }}
        >
          {/* Animation Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <AnimationLottie animationPath={experienceAnimation} />
            </Box>
          </Box>

          {/* Experience Cards Section */}
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 6,
              }}
            >
              {experiences.map((experience) => (
                <PdExperienceItem key={experience.id} {...experience} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
