import { Box, Typography, Button, Container } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Container
      sx={{
        minHeight: "64vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h1"
          sx={{ fontSize: "8rem", fontWeight: "bold", color: "#3f51b5" }}
        >
          {t("common.Page404.title")}
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {t("common.Page404.subTitle")}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {t("common.Page404.description")}
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/")}
        sx={{ textTransform: "none" }}
      >
        {t("common.Page404.goBack")}
      </Button>
    </Container>
  );
}

export default Page404;
