import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface ProjectCardProps {
  project: {
    name: string;
    tools: string[];
    role: string;
    description: string;
  };
}

export default function PdProjectCard({ project }: ProjectCardProps) {
  return (
    <Box
      sx={{
        bgcolor: "linear-gradient(to right, #0d1224, #0a0d37)",
        borderColor: "#1b2c68a0",
        borderRadius: 2,
        border: 1,
        width: "100%",
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Divider
          sx={{
            height: "1px",
            width: "100%",
            background:
              "linear-gradient(to right, transparent, #ec4899, #8b5cf6)",
          }}
        />
        <Divider
          sx={{
            height: "1px",
            width: "100%",
            background: "linear-gradient(to right, #8b5cf6, transparent)",
          }}
        />
      </Box>
      <Box
        sx={{
          px: { xs: 4, lg: 8 },
          py: { xs: 3, lg: 5 },
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: { xs: 1, lg: 2 },
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Box
            sx={{
              width: { xs: 8, lg: 12 },
              height: { xs: 8, lg: 12 },
              bgcolor: "#f87171",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: { xs: 8, lg: 12 },
              height: { xs: 8, lg: 12 },
              bgcolor: "#fb923c",
              borderRadius: "50%",
            }}
          />
          <Box
            sx={{
              width: { xs: 8, lg: 12 },
              height: { xs: 8, lg: 12 },
              bgcolor: "#bbf7d0",
              borderRadius: "50%",
            }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            ml: 3,
            color: "#16f2b3",
            fontSize: { xs: "1rem", lg: "1.25rem" },
          }}
        >
          {project.name}
        </Typography>
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          borderTop: 2,
          borderColor: "#312e81",
          px: { xs: 4, lg: 8 },
          py: { xs: 4, lg: 8 },
        }}
      >
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <Box className="blink" sx={{ mb: 2 }}>
            <Typography component="span" sx={{ mr: 2, color: "#ec4899" }}>
              const
            </Typography>
            <Typography component="span" sx={{ mr: 2, color: "#fff" }}>
              project
            </Typography>
            <Typography component="span" sx={{ mr: 2, color: "#ec4899" }}>
              =
            </Typography>
            <Typography component="span" sx={{ color: "#9ca3af" }}>
              {"{"}
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography
              component="span"
              sx={{ ml: { xs: 4, lg: 8 }, mr: 2, color: "#fff" }}
            >
              name:
            </Typography>
            <Typography component="span" sx={{ color: "#fcd34d" }}>
              {`'${project.name}',`}
            </Typography>
          </Box>

          <Box sx={{ mb: 1 }}>
            <Typography
              component="span"
              sx={{ ml: { xs: 4, lg: 8 }, mr: 2, color: "#fff" }}
            >
              tools:
            </Typography>
            <Typography component="span" sx={{ color: "#9ca3af" }}>
              {" ["}
            </Typography>
            {project.tools.map((tag, i) => (
              <React.Fragment key={i}>
                <Typography component="span" sx={{ color: "#fcd34d" }}>
                  {tag}
                </Typography>
                {project.tools.length - 1 !== i && (
                  <Typography component="span" sx={{ color: "#9ca3af" }}>
                    {`', '`}
                  </Typography>
                )}
              </React.Fragment>
            ))}
            <Typography component="span" sx={{ color: "#9ca3af" }}>
              {"],"}
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography
              component="span"
              sx={{ ml: { xs: 4, lg: 8 }, mr: 2, color: "#fff" }}
            >
              myRole:
            </Typography>
            <Typography component="span" sx={{ color: "#fb923c" }}>
              {project.role}
            </Typography>
            <Typography component="span" sx={{ color: "#9ca3af" }}>
              ,
            </Typography>
          </Box>
          <Box sx={{ mb: 1 }}>
            <Typography
              component="span"
              sx={{ ml: { xs: 4, lg: 8 }, mr: 2, color: "#fff" }}
            >
              Description:
            </Typography>
            <Typography component="span" sx={{ color: "#06b6d4" }}>
              {" " + project.description}
            </Typography>
            <Typography component="span" sx={{ color: "#9ca3af" }}>
              ,
            </Typography>
          </Box>
          <Box>
            <Typography component="span" sx={{ color: "#9ca3af" }}>
              {"};"}
            </Typography>
          </Box>
        </code>
      </Box>
    </Box>
  );
}
