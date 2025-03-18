import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import StackOverflowIcon from "@mui/icons-material/Help";
import { IconButton } from "@mui/material";
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
function ContactButton({ icon }: { icon: ReactNode }) {
  return (
    <IconButton
      sx={{
        backgroundColor: "primary.main",
        transition: "all 0.3s",
        "&:hover": {
          backgroundColor: "primary.light",
          transform: "scale(1.1)",
        },
        color: "white",
      }}
    >
      {icon}
    </IconButton>
  );
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
        <ContactButton icon={<AlternateEmail fontSize="medium" />} />
        <Typography color="textPrimary" variant="body1">
          {email}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={3}>
        <ContactButton icon={<Call fontSize="medium" />} />
        <Typography color="textPrimary" variant="body1">
          {phone}
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" gap={3}>
        <ContactButton icon={<LocationOn fontSize="medium" />} />
        <Typography color="textPrimary" variant="body1">
          {address}
        </Typography>
      </Box>
      <Box mt={8} display="flex" gap={3}>
        <Link to={github} target="_blank">
          <ContactButton icon={<GitHub fontSize="large" />} />
        </Link>
        <Link to={linkedIn} target="_blank">
          <ContactButton icon={<LinkedIn fontSize="large" />} />
        </Link>
        <Link to={stackOverflow} target="_blank">
          <ContactButton icon={<StackOverflowIcon fontSize="large" />} />
        </Link>
      </Box>
    </Box>
  );
}
