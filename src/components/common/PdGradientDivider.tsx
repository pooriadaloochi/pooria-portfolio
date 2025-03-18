import { Box, useTheme } from "@mui/material";

interface PdGradientDividerProps {
  top?: string;
}

export function PdGradientDivider({ top }: PdGradientDividerProps) {
  const { primary } = useTheme().palette;
  return (
    <Box
      sx={{
        position: "absolute",
        top: top ?? 0,
        left: "0",
        right: "0",
        height: "1px",
        bgcolor: "transparent",
        background: `linear-gradient(to right, transparent, ${primary.main}, transparent)`,
        transform: "translateY(-50%)",
      }}
    />
  );
}
