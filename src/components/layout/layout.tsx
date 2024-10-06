import { FC, ReactNode } from "react";
import { Theme, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import PdFooter from "../footer/PdFooter";
import PdNavbar from "../top-bar/PdTopBar";
// import { useMobileNav } from "./use-mobile-nav";

const HorizontalLayoutRoot = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
});

const HorizontalLayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

interface HorizontalLayoutProps {
  children?: ReactNode;
  // sections?: Section[];
  // paths: { index: string; login: string };
}

export const Layout: FC<HorizontalLayoutProps> = (props) => {
  const { children, ...other } = props;

  // Get the theme from the useTheme hook
  const theme = useTheme<Theme>();

  // Use the theme object inside useMediaQuery
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  //   const mobileNav = useMobileNav();

  return (
    <>
      <PdNavbar />
      {/* <PdNavbar onMobileNav={mobileNav.handleOpen} {...other} /> */}
      {/* {!lgUp && (
        <MobileNav
          onClose={mobileNav.handleClose}
          open={mobileNav.open}
          {...other}
        />
      )} */}
      <HorizontalLayoutRoot>
        <HorizontalLayoutContainer>{children}</HorizontalLayoutContainer>
      </HorizontalLayoutRoot>
      <PdFooter />
    </>
  );
};
