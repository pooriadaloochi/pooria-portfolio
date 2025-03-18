import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import experienceAnimation from "@assets/json/lottie/code.json";
import PdExperienceItem from "./PdExperienceItem";
import { PdSectionHeader } from "@components/common/PsSectionHeader/PsSectionHeader";
import {
  PaAnimationLottie,
  PaAnimationLottieProps,
} from "@components/helper/PaAnimationLottie";
import { experiences } from "@api/personalData";

export function PdExperiencesSection() {
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <PaAnimationLottie
                animationPath={
                  experienceAnimation as unknown as PaAnimationLottieProps["animationPath"]
                }
              />
            </Box>
          </Box>
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
