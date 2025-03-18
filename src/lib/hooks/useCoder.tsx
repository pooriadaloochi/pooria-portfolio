import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { blue } from "@theme/dark/dark-theme-colors";
import { CoderDataProps } from "@components/coder/PdCoderCard";

interface useCoderOutput {
  getCoderValue: (data: CoderDataProps) => JSX.Element | string;
}

export const useCoder = (): useCoderOutput => {
  const { warning } = useTheme().palette;
  const getCoderValue = ({ key, value }: CoderDataProps) => {
    switch (true) {
      case Array.isArray(value):
        return (
          <Stack direction="row" spacing={1} key={key}>
            <Typography>{key}:</Typography>
            <Box component="span" sx={{ color: "grey.500" }}>
              {"["}
            </Box>
            <Stack
              display="flex"
              width="70%"
              direction="row"
              flexWrap="wrap"
              spacing={1}
            >
              {Array.isArray(value) &&
                value.map((val, index) => (
                  <Fragment key={index}>
                    <Typography
                      sx={{
                        color: warning.main,
                      }}
                    >
                      {val}
                    </Typography>
                    {index !== value.length - 1 ? (
                      ", "
                    ) : (
                      <Typography sx={{ color: "grey.500" }}>{"]"}</Typography>
                    )}
                  </Fragment>
                ))}
            </Stack>
          </Stack>
        );

      case typeof value === "boolean":
        return (
          <Stack direction="row" spacing={1} key={key}>
            <Typography>{key}:</Typography>
            <Typography sx={{ color: blue.main }}>
              {` ${value.toString()},`}
            </Typography>
          </Stack>
        );

      default:
        return (
          <Stack direction="row" spacing={1} key={key}>
            <Typography>{key}:</Typography>
            <Typography sx={{ color: warning.main }}>
              {` "${value.toString()}",`}
            </Typography>
          </Stack>
        );
    }
  };
  return { getCoderValue };
};
