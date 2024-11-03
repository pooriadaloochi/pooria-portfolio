import { Box, Grid, Typography } from "@mui/material";
import StackOverflowIcon from "@mui/icons-material/Help";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Call,
  GitHub,
  LinkedIn,
  LocationOn,
  AlternateEmail,
} from "@mui/icons-material";

interface PdContactInfoProps {
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedIn: string;
  stackOverflow: string;
}

export function PdContactInfo({
  address,
  email,
  github,
  linkedIn,
  phone,
  stackOverflow,
}: PdContactInfoProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      width={{ xs: "fit-content", lg: "70%" }}
      mx={{ xs: "auto", lg: 0 }}
    >
      <Box display="flex" alignItems="center" gap={3}>
        <AlternateEmail
          sx={{
            backgroundColor: "primary.main",
            p: 1,
            borderRadius: "50%",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "#16f2b3",
              transform: "scale(1.1)",
            },
            color: "white",
            cursor: "pointer",
          }}
          fontSize="large"
        />
        <Typography color="textPrimary" variant="body1">
          {email}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={3}>
        <Call
          sx={{
            backgroundColor: "primary.main",
            p: 1,
            borderRadius: "50%",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "#16f2b3",
              transform: "scale(1.1)",
            },
            color: "white",
            cursor: "pointer",
          }}
          fontSize="large"
        />
        <Typography color="textPrimary" variant="body1">
          {phone}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={3}>
        <LocationOn
          sx={{
            backgroundColor: "primary.main",
            p: 1,
            borderRadius: "50%",
            transition: "all 0.3s",
            "&:hover": {
              backgroundColor: "#16f2b3",
              transform: "scale(1.1)",
            },
            color: "white",
            cursor: "pointer",
          }}
          fontSize="large"
        />
        <Typography color="textPrimary" variant="body1">
          {address}
        </Typography>
      </Box>
      <Box mt={8} display="flex" gap={3}>
        <Link to={github} target="_blank">
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#16f2b3",
                transform: "scale(1.1)",
              },
              color: "white",
            }}
          >
            <GitHub fontSize="large" />
          </IconButton>
        </Link>

        <Link to={linkedIn} target="_blank">
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#16f2b3",
                transform: "scale(1.1)",
              },
              color: "white",
            }}
          >
            <LinkedIn fontSize="large" />
          </IconButton>
        </Link>

        <Link to={stackOverflow} target="_blank">
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#16f2b3",
                transform: "scale(1.1)",
              },
              color: "white",
            }}
          >
            <StackOverflowIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
