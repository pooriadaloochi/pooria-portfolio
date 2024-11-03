import { Box } from "@mui/material";

interface PdLabelProps {
  title: string;
}

export default function PdLabel({ title }: PdLabelProps) {
  return (
    <Box
      sx={{
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: 200,
          height: 62,
          transform: "rotate(90deg)",
          p: 2,
          px: 5,
          fontSize: "1.25rem",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        {title}
      </Box>
      <Box
        sx={{ height: 144, width: "2px", backgroundColor: "primary.main" }}
      />
    </Box>
  );
}
