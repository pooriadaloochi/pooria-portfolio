import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import { personalData } from "../../api/personalData";

function PdFooter() {
  const { t } = useTranslation();
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "#353951",
        backgroundColor: "#0d1224",
        color: "white",
        py: { xs: 6, lg: 10 },
        width: "100%",
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="body2">
          © {t("topBar.footer.poweredBy")}{" "}
          <Link
            href={personalData.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "primary.light" }}
          >
            {t("topBar.logo")}
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default PdFooter;
