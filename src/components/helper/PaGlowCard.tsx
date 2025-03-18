import { ReactNode } from "react";
import { Box } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

const StyledGlowCard = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.grey[300],
  borderRadius: theme.spacing(3),
  border: `1px solid ${alpha(theme.palette.grey[500], 0.5)}`,
  boxShadow: `0px 10px 30px ${alpha(theme.palette.primary.main, 0.2)}`,
  transition: "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
  cursor: "pointer",
  overflow: "hidden",
  maxWidth: "620px",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: `0px 20px 40px ${alpha(theme.palette.primary.main, 0.3)}`,
    borderColor: alpha(theme.palette.primary.main, 0.8),
  },
  "&:hover .glows": {
    opacity: 1,
  },
  "& .glows": {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
    background: `radial-gradient(circle, ${alpha(
      theme.palette.primary.main,
      0.7
    )}, transparent 70%)`,
    borderRadius: "inherit",
    opacity: 0,
    transition: "opacity 0.3s ease",
    zIndex: -1,
  },
}));

interface GlowCardProps {
  children: ReactNode;
}

export function PaGlowCard({ children }: GlowCardProps) {
  return (
    <StyledGlowCard>
      <div className="glows" />
      {children}
    </StyledGlowCard>
  );
}
