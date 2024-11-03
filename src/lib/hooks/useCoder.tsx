import { Box, Stack, Typography, useTheme } from "@mui/material";
import { blue } from "../theme/dark/dark-theme-colors";
import { CoderDataProps } from "../../components/coder/PdCoder";

interface useCoderOutput {
  getCoderValue: (data: CoderDataProps) => JSX.Element | string;
}

export const useCoder = (): useCoderOutput => {
  const { warning } = useTheme().palette;
  const getCoderValue = ({ key, value }: CoderDataProps) => {
    switch (true) {
      case Array.isArray(value):
        return (
          <Stack direction="row" spacing={1}>
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
                  <>
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
                  </>
                ))}
            </Stack>
          </Stack>
          //       <Fragment key={valIndex}>
          //         <Box component="span" sx={{ color: "#ffb300" }}>
          //           {val}
          //         </Box>
          //         {valIndex < value.length - 1 && (
          //           <Box component="span" sx={{ color: "grey.500" }}>
          //             ,
          //           </Box>
          //         )}
          //       </Fragment>
          //     ))}
          //     <Box component="span" sx={{ color: "grey.500" }}>
          //       {"]"}
          //     </Box>
          //   </>
        );

      case typeof value === "boolean":
        return (
          <Stack direction="row" spacing={1}>
            <Typography>{key}:</Typography>
            <Typography sx={{ color: blue.main }}>
              {` ${value.toString()},`}
            </Typography>
          </Stack>
        );

      default:
        return (
          <Stack direction="row" spacing={1}>
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
