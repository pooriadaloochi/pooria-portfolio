import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { projectsData } from "../../../api/projects-data";
import PdProjectCard from "./components/PdProjectCard";


export default function PdProjects() {
  return (
    <Box
      id="projects"
      sx={{ position: "relative", zIndex: 50, my: { xs: 12, lg: 24 } }}
    >
      {/* Title Section */}
      <Box sx={{ position: "sticky", top: 10 }}>
        {/* Decorative Violet Circle */}
        <Box
          sx={{
            width: 80,
            height: 80,
            bgcolor: "rgba(199, 147, 250, 0.5)",
            borderRadius: "50%",
            position: "absolute",
            top: -3,
            left: "50%",
            transform: "translateX(-50%)",
            filter: "blur(3rem)",
            opacity: 0.3,
          }}
        ></Box>

        {/* Title */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
          }}
        >
          <Typography
            variant="h6"
            component="span"
            sx={{
              bgcolor: "#1a1443",
              color: "#fff",
              px: 3,
              py: 1.5,
              borderRadius: 1,
              position: "absolute",
              left: 0,
            }}
          >
            PROJECTS
          </Typography>
          <Box sx={{ width: "100%", height: 2, bgcolor: "#1a1443" }}></Box>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box sx={{ pt: 24 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {projectsData.slice(0, 4).map((project, index) => (
            <Box
              id={`sticky-card-${index + 1}`}
              key={index}
              sx={{
                width: "100%",
                maxWidth: "40rem",
                mx: "auto",
                position: "sticky",
              }}
            >
              <Paper
                sx={{
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.5s",
                }}
              >
                <PdProjectCard project={project} />
              </Paper>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
