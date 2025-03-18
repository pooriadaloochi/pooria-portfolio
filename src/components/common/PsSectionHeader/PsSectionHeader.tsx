import { alpha, Box, Typography, useTheme } from "@mui/material";
import { PdGradientDivider } from "@components/common/PdGradientDivider";

interface PdSectionHeaderProps {
  title: string;
}

export function PdSectionHeader({ title }: PdSectionHeaderProps) {
  const { primary } = useTheme().palette;

  return (
    <Box
      sx={{
        width: "99%",
        position: "relative",
        py: 6,
        my: 5,
        bgcolor: "background.paper",
        textAlign: "center",
        borderRadius: 2,
      }}
    >
      <PdGradientDivider top="50%" />
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
          px: 3,
          py: 1,
          bgcolor: "primary.dark",
          borderRadius: 1,
          boxShadow: `0 0 20px ${alpha(primary.main, 0.5)}`,
          zIndex: 1,
        }}
      >
        <Typography variant="h6" color="white">
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
