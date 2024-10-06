// @flow strict

import Marquee from "react-fast-marquee";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { skillsData } from "../../api/skills";
import { skillsImage } from "../../api/skill/skill-image";

export default function PdSkills() {
  return (
    <Box
      id="skills"
      sx={{
        position: "relative",
        zIndex: 50,
        borderTop: "1px solid",
        borderColor: "#25213b",
        my: { xs: 12, lg: 24 },
      }}
    >
      {/* Decorative Violet Circle */}
      <Box
        sx={{
          width: 100,
          height: 100,
          bgcolor: "rgba(199, 147, 250, 0.5)",
          borderRadius: "50%",
          position: "absolute",
          top: 6,
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(3rem)",
          opacity: 0.2,
        }}
      ></Box>

      {/* Gradient Separator */}
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
              backgroundImage:
                "linear-gradient(to right, transparent, #7e57c2, transparent)",
            }}
          />
        </Box>
      </Box>

      {/* Skills Header */}
      <Box
        sx={{ display: "flex", justifyContent: "center", my: 5, py: { lg: 8 } }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: 24, height: 2, bgcolor: "#1a1443" }}></Box>
          <Typography
            variant="h6"
            component="span"
            sx={{
              bgcolor: "#1a1443",
              color: "#fff",
              px: 3,
              py: 1,
              borderRadius: 1,
            }}
          >
            Skills
          </Typography>
          <Box sx={{ width: 24, height: 2, bgcolor: "#1a1443" }}></Box>
        </Box>
      </Box>

      {/* Skills Carousel */}
      <Box sx={{ my: 12 }}>
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <Paper
              key={id}
              sx={{
                width: 144,
                minWidth: "fit-content",
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
                  borderColor: "#7e57c2",
                },
                cursor: "pointer",
                boxShadow: "none",
                border: "1px solid #1f223c",
                bgcolor: "#11152c",
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
                <Box sx={{ width: "75%" }}>
                  <Divider
                    sx={{
                      height: "1px",
                      backgroundImage:
                        "linear-gradient(to right, transparent, #7e57c2, transparent)",
                    }}
                  />
                </Box>
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
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={40}
                    height={40}
                  />
                </Box>
                <Typography
                  color="white"
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
    </Box>
  );
}
