import { FC, ReactNode } from "react";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import PdFooter from "../footer/PdFooter";
import { PdTopBarDesktop } from "../top-bar/PdTopBarDesktop/PdTopBarDesktop";
import { PdTopBarMobile } from "../top-bar/PdTopBarMobile/PdTopBarMobile";

const HorizontalLayoutRoot = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
});

const HorizontalLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100vw",
  overflowX: "hidden",
});

interface HorizontalLayoutProps {
  children?: ReactNode;
}

export const Layout: FC<HorizontalLayoutProps> = (props) => {
  const { children } = props;

  const theme = useTheme<Theme>();

  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      {mdUp ? <PdTopBarDesktop /> : <PdTopBarMobile />}
      <HorizontalLayoutRoot>
        <HorizontalLayoutContainer>{children}</HorizontalLayoutContainer>
      </HorizontalLayoutRoot>
      <PdFooter />
    </>
  );
};
