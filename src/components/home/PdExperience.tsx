import { Box, Typography } from "@mui/material";
import { Work as WorkIcon } from "@mui/icons-material";
import experienceAnimation from "../../assets/json/lottie/code.json"; // Adjust path accordingly
import GlowCard from "../helper/glow-card";
import AnimationLottie from "../helper/animation-lottie";
import { experiences } from "../../api/personalData";

export default function PdExperience() {
  return (
    <Box
      id="experience"
      sx={{
        position: "relative",
        zIndex: 50,
        borderTop: "1px solid #25213b",
        my: { xs: 12, lg: 24 },
      }}
    >
      <img
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        style={{
          position: "absolute",
          top: 0,
          zIndex: -10,
        }}
      />

      <Box
        sx={{ display: "flex", justifyContent: "center", my: 5, py: { lg: 8 } }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{ width: "96px", height: "2px", backgroundColor: "#1a1443" }}
          />
          <Box
            sx={{
              backgroundColor: "#1a1443",
              color: "white",
              p: 2,
              px: 5,
              fontSize: "1.25rem",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            Experiences
          </Box>
          <Box
            sx={{ width: "96px", height: "2px", backgroundColor: "#1a1443" }}
          />
        </Box>
      </Box>

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
            <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <Box sx={{ p: 3, position: "relative" }}>
                    <img
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        opacity: 0.8,
                      }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        sx={{
                          color: "#16f2b3",
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        }}
                      >
                        {experience.duration}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                        px: 3,
                        py: 5,
                      }}
                    >
                      <Box
                        sx={{
                          color: "violet",
                          transition: "all 0.3s",
                          "&:hover": { transform: "scale(1.25)" },
                        }}
                      >
                        <WorkIcon sx={{ fontSize: 36 }} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "1rem", sm: "1.25rem" },
                            mb: 1,
                            fontWeight: "500",
                            textTransform: "uppercase",
                          }}
                        >
                          {experience.title}
                        </Typography>
                        <Typography
                          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                        >
                          {experience.company}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </GlowCard>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
