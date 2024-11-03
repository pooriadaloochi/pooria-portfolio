import { Box, Typography } from "@mui/material";
import GlowCard from "../../helper/glow-card";

export default function PdExperienceItem(experience: any) {
  return (
    <GlowCard key={experience.id}>
      <Box
        sx={{
          width: "100%",
          minHeight: "150px",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          direction: "ltr",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "primary.main",
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
            py: 2,
          }}
        >
          <Box
            sx={{
              color: "violet",
              transition: "all 0.3s",
              "&:hover": { transform: "scale(1.25)" },
            }}
          >
            <img src={experience.image} alt={experience.company} width={100} />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "text.primary",
                fontSize: { xs: "1rem", sm: "1.25rem" },
                mb: 1,
                fontWeight: "500",
              }}
            >
              {experience.title}
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              {experience.company}
            </Typography>
          </Box>
        </Box>
      </Box>
    </GlowCard>
  );
}
