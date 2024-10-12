import { Box, Typography, Link } from "@mui/material";

function PdFooter() {
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
          © Developer Portfolio by{" "}
          <Link
            href="https://www.linkedin.com/in/abu-said-bd/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#16f2b3" }}
          >
            Pooria Daloochi
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default PdFooter;
