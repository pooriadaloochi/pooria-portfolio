import { Box, Typography, Link } from "@mui/material";

function PdFooter() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        borderTop: "1px solid",
        borderColor: "#353951",
        backgroundColor: "#0d1224",
        color: "white",
        py: { xs: 6, lg: 10 },
        px: { xs: 6, sm: 12 },
        maxWidth: {
        //   lg: "70rem",
        //   xl: "76rem",
        //   "2xl": "92rem",
        },
        mx: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: -40,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            height: "1px",
            width: "50%",
            backgroundImage:
              "linear-gradient(to right, transparent, violet, transparent)",
          }}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
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
            Abu Said
          </Link>
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link
            href="https://github.com/said7388/developer-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "uppercase",
              "&:hover": {
                color: "#16f2b3",
              },
            }}
          >
            {/* Uncomment if you want to use these icons */}
            {/* <IoStar /> */}
            <span>Star</span>
          </Link>
          <Link
            href="https://github.com/said7388/developer-portfolio/fork"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              textTransform: "uppercase",
              "&:hover": {
                color: "#16f2b3",
              },
            }}
          >
            {/* Uncomment if you want to use these icons */}
            {/* <CgGitFork /> */}
            <span>Fork</span>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default PdFooter;
