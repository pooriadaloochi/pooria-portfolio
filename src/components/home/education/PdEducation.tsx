import AnimationLottie from "../../helper/animation-lottie";
// import lottieFile from "/lottie/study.json";
import { Box, Grid, Typography, Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { educations } from "../../../api/educations";
import GlowCard from "../../helper/glow-card";

interface EducationData {
  id: number;
  duration: string;
  title: string;
  institution: string;
}

export default function PdEducation() {
  return (
    <Box
      id="education"
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
        className="absolute top-0 -z-10"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          transform: "translateY(-1px)",
        }}
      >
        <Box sx={{ width: "75%" }}>
          <Divider
            sx={{
              height: "1px",
              width: "100%",
              backgroundImage:
                "linear-gradient(to right, transparent, #8b5cf6, transparent)",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{ display: "flex", justifyContent: "center", my: 5, py: { lg: 8 } }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: 96, height: 2, bgcolor: "#1a1443" }} />
          <Typography
            sx={{
              bgcolor: "#1a1443",
              color: "#fff",
              p: 2,
              px: 5,
              fontSize: "1.25rem",
              borderRadius: 1,
            }}
          >
            Educations
          </Typography>
          <Box sx={{ width: 96, height: 2, bgcolor: "#1a1443" }} />
        </Box>
      </Box>

      <Box sx={{ py: 8 }}>
        <Grid container spacing={{ xs: 8, lg: 16 }}>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Box sx={{ width: "75%", height: "75%" }}>
              {/* <AnimationLottie animationPath={lottieFile} /> */}
            </Box>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {educations.map((education: EducationData) => (
                <GlowCard key={education.id}>
                  <Box sx={{ p: 3, position: "relative", color: "#fff" }}>
                    <img
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "0.75rem", sm: "1rem" },
                          color: "primary.light",
                        }}
                      >
                        {education.duration}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        px: 3,
                        py: 5,
                      }}
                    >
                      <Box
                        sx={{
                          color: "#8b5cf6",
                          transition: "all 0.3s",
                          "&:hover": {
                            transform: "scale(1.25)",
                          },
                        }}
                      >
                        <PersonIcon fontSize={"large"} />
                      </Box>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: { xs: "1rem", sm: "1.25rem" },
                            mb: 2,
                            fontWeight: "medium",
                            textTransform: "uppercase",
                          }}
                        >
                          {education.title}
                        </Typography>
                        <Typography
                          sx={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
                        >
                          {education.institution}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </GlowCard>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
