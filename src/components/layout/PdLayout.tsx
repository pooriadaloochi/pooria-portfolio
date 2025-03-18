import { ReactNode } from "react";
import { Stack, Theme, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
// Components
import { PdTopBarDesktop } from "@components/top-bar/PdTopBarDesktop/PdTopBarDesktop";
import { PdTopBarMobile } from "@components/top-bar/PdTopBarMobile/PdTopBarMobile";
import { PaScrollToTopBottom } from "@components/helper/PaScrollToTopBottom";
import { PdFooter } from "@components/PdFooter/PdFooter";

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

export function PdLayout(props: HorizontalLayoutProps) {
  const { children } = props;

  const theme = useTheme<Theme>();

  const mdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack>
      {mdUp ? <PdTopBarDesktop /> : <PdTopBarMobile />}
      <HorizontalLayoutRoot>
        <HorizontalLayoutContainer>{children}</HorizontalLayoutContainer>
      </HorizontalLayoutRoot>
      <PaScrollToTopBottom />
      <PdFooter />
    </Stack>
  );
}
