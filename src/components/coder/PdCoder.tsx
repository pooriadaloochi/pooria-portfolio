import React from "react";
import { Box, Typography, Divider, Grid, Stack } from "@mui/material";
import { useCoder } from "../../lib/hooks/useCoder";

export interface DataProps {
  key: string;
  value: string | boolean | string[] | number | object;
}

interface CoderCardProps {
  title: string;
  data: DataProps[];
}

export default function PdCoderCard({ title, data }: CoderCardProps) {
  const { getCoderValue } = useCoder();
  return (
    <Box
      className="coder-card"
      sx={{
        order: { lg: 2, xs: 1 },
        borderRadius: "16px",
        border: "1px solid #1b2c68a0",
        bgcolor: "background.paper",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      {/* Top Borders */}
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Divider
          sx={{
            flex: 1,
            height: "2px",
            background:
              "linear-gradient(to right, transparent, #e91e63, #7e57c2)",
          }}
        />
        <Divider
          sx={{
            flex: 1,
            height: "2px",
            background: "linear-gradient(to right, #7e57c2, transparent)",
          }}
        />
      </Box>

      {/* Colored Dots */}
      <Box sx={{ px: 4, py: 2 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              bgcolor: "error.main",
            }}
          />
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              bgcolor: "warning.main",
            }}
          />
          <Box
            sx={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              bgcolor: "success.light",
            }}
          />
        </Box>
      </Box>

      {/* Code Block */}
      <Box
        sx={{
          borderTop: "2px solid #3f51b5",
          px: 4,
          py: 4,
          fontFamily: "Monospace",
          fontSize: { xs: "0.75rem", md: "1rem" },
          color: "text.primary",
        }}
      >
        <Stack>
          <Stack spacing={1} direction="row">
            <Box component="span" sx={{ color: "#e91e63" }}>
              const
            </Box>
            <Box component="span" sx={{ color: "#fff" }}>
              {title}
            </Box>
            <Box component="span" sx={{ color: "#e91e63" }}>
              =
            </Box>
            <Box component="span" sx={{ color: "grey.500" }}>
              {"{"}
            </Box>
          </Stack>
          {/* Dynamically Render Data */}
          <Stack pl={4} gap={1} mt={1}>
            {data.map((item) => getCoderValue(item))}
          </Stack>
          <Box sx={{ mt: 1 }}>
            <Box component="span" sx={{ color: "grey.500" }}>
              {"}"};
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

// Usage Example
