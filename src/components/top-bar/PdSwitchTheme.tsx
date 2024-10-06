import { DarkMode, WbSunny } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import {
  usePaAppContextActions,
  usePaAppContextState,
} from "../../lib/PaAppContext";

export default function PdSwitchTheme() {
  const { paletteMode } = usePaAppContextState();
  const { switchTheme } = usePaAppContextActions();

  return (
    <IconButton
      onClick={switchTheme}
      color="inherit"
      sx={{
        transition: "all 0.4s ease",
        transform: "rotate(0deg)",
        "&:hover": {
          transform: "rotate(180deg)",
        },
      }}
    >
      {paletteMode === "dark" ? (
        <WbSunny
          sx={{
            transition: "fill 0.3s ease, transform 0.4s ease",
            fill: "#ffb74d",
            "&:hover": {
              fill: "#ffa726",
            },
          }}
        />
      ) : (
        <DarkMode
          sx={{
            transition: "fill 0.3s ease, border 0.3s ease, transform 0.4s ease",
            fill: "GrayText",
            border: "2px solid GrayText",
            borderRadius: "50%",
            "&:hover": {
              fill: "#111",
              border: "2px solid #111",
            },
          }}
        />
      )}
    </IconButton>
  );
}
