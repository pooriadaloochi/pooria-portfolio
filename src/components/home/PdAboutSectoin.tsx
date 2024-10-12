import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { personalData } from "../../api/personalData";

const ProfileImage = styled("img")({
  width: 280,
  borderRadius: "8px",
  transition: "all 1s",
  cursor: "pointer",
  "&:hover": {
    filter: "grayscale(0%)",
    transform: "scale(1.1)",
  },
});

export default function PdAboutSection() {
  return (
    <Box
      id="about"
      sx={{
        my: { xs: 12, lg: 16 },
        px: { xs: 2, lg: 10 },
        position: "relative",
      }}
    >
      {/* Vertical ABOUT ME label */}
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          top: 64,
          right: 0,
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            transform: "rotate(90deg)",
            p: 2,
            px: 5,
            fontSize: "1.25rem",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          ABOUT ME
        </Box>
        <Box
          sx={{ height: 144, width: "2px", backgroundColor: "primary.main" }}
        />
      </Box>

      {/* About Section Content */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 4, lg: 16 },
        }}
      >
        {/* Text Section */}
        <Box sx={{ order: { xs: 2, lg: 1 } }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "medium",
              mb: 2,
              color: "primary.light",
              textTransform: "uppercase",
            }}
          >
            Who I am?
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.875rem", lg: "1.125rem" } }}>
            {personalData.description}
          </Typography>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            order: { xs: 1, lg: 2 },
          }}
        >
          <ProfileImage
            src={"/Profile_Transparent.png"}
            alt={personalData.name}
          />
        </Box>
      </Box>
    </Box>
  );
}
