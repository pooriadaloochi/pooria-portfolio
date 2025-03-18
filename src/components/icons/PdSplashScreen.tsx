import { FC } from "react";
import { Box, keyframes } from "@mui/material";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const PdSplashScreen: FC = () => (
  <Box
    sx={{
      alignItems: "center",
      backgroundColor: "background.paper",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      justifyContent: "center",
      left: 0,
      p: 3,
      position: "fixed",
      top: 0,
      width: "100vw",
      zIndex: 1400,
    }}
  >
    <Box
      sx={{
        display: "inline-flex",
        borderRadius: "50%",
        overflow: "hidden",
        width: 100,
        height: 100,
        animation: `${spin} 2s linear infinite`,
      }}
    >
      <img src="/logo.png" alt="logo" />
    </Box>
  </Box>
);
