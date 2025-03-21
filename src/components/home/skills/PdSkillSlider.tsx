import { skillsImage } from "@api/skill/skill-image";
import { skillsData } from "@api/skills";
import { PdGradientDivider } from "@components/common/PdGradientDivider";
import { Box, Paper, Typography } from "@mui/material";
import { grey } from "@theme/dark/dark-theme-colors";
import Marquee from "react-fast-marquee";

export default function PdSkillSlider() {
  return (
    <Box sx={{ my: 12 }}>
      <Marquee
        gradient={false}
        speed={80}
        pauseOnHover={true}
        pauseOnClick={true}
        loop={100}
        delay={2}
        play={true}
        direction="right"
        style={{ minHeight: "210px" }}
      >
        {skillsData.map((skill, id) => (
          <Paper
            key={id}
            sx={{
              width: 170,
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.5s",
              mx: { xs: 3, sm: 5 },
              borderRadius: 2,
              "&:hover": {
                transform: "scale(1.15)",
                borderColor: "primary.main",
              },
              cursor: "pointer",
              boxShadow: "none",
              border: `1px solid ${grey[700]}`,
              bgcolor: "background.paper",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                transform: "translateY(-1px)",
                width: "100%",
              }}
            >
              <PdGradientDivider />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 3,
                p: 6,
              }}
            >
              <Box sx={{ height: 32, sm: { height: 40 } }}>
                <img
                  src={skillsImage(skill)}
                  alt={skill}
                  width={40}
                  height={40}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "0.875rem", sm: "1.125rem" } }}
              >
                {skill}
              </Typography>
            </Box>
          </Paper>
        ))}
      </Marquee>
    </Box>
  );
}
