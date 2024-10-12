import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";
import * as emailjs from "emailjs-com";

import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  useTheme,
} from "@mui/material";

interface UserInput {
  name: string;
  email: string;
  message: string;
}

interface ErrorState {
  email: boolean;
  required: boolean;
}
export function isValidEmail(email: string): boolean {
  // Regular expression for validating email addresses
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const ContactWithoutCaptcha: React.FC = () => {
  const { gradients } = useTheme().palette;
  const [error, setError] = useState<ErrorState>({
    email: false,
    required: false,
  });
  const [userInput, setUserInput] = useState<UserInput>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.email || !userInput.message || !userInput.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    } else if (error.email) {
      return;
    } else {
      setError((prev) => ({ ...prev, required: false }));
    }

    const contactConfig = {
      YOUR_EMAIL: "pooriadaloochi@gmail.com",
      description:
        "Feel free to reach out if you'd like to collaborate or learn more about my work.",
      YOUR_SERVICE_ID: "service_3qdo8nc",
      YOUR_TEMPLATE_ID: "template_95q3iru",
      YOUR_USER_ID: "_8sWtHy70luck1ejJ",
    };
    const templateParams = {
      from_name: userInput.email,
      user_name: userInput.name,
      to_name: contactConfig.YOUR_EMAIL,
      message: userInput.message,
    };
    try {
      setLoading(true);
      const result = await emailjs.send(
        contactConfig.YOUR_SERVICE_ID,
        contactConfig.YOUR_TEMPLATE_ID,
        templateParams,
        contactConfig.YOUR_USER_ID
      );
      if (result.status === 200) {
        toast.success("Email sent successfully!");
        setUserInput({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send email!");
      }
    } catch {
      toast.error("Failed to send email!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <Typography
        variant="h6"
        component="p"
        fontWeight="medium"
        mb={5}
        color="primary.main"
        textTransform="uppercase"
      >
        Contact with me
      </Typography>
      <Box
        maxWidth="sm"
        border={1}
        borderColor="grey.800"
        p={3}
        borderRadius={2}
        bgcolor="background.paper"
      >
        <Typography variant="body2" color="textPrimary">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </Typography>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Name"
              variant="outlined"
              value={userInput.name}
              required
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
              inputProps={{ maxLength: 100 }}
              sx={{
                bgcolor: "background.default",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    // borderColor: "#353a52",
                  },
                  "&:hover fieldset": {
                    // borderColor: "#16f2b3",
                  },
                },
                "& .MuiInputBase-input": {
                  // color: "#fff",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Email"
              variant="outlined"
              type="email"
              value={userInput.email}
              required
              onChange={(e) =>
                setUserInput({ ...userInput, email: e.target.value })
              }
              onBlur={() => {
                checkRequired();
                setError((prev) => ({
                  ...prev,
                  email: !isValidEmail(userInput.email),
                }));
              }}
              error={error.email}
              helperText={error.email ? "Please provide a valid email!" : ""}
              inputProps={{ maxLength: 100 }}
              sx={{
                bgcolor: "background.default",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    // borderColor: "#353a52",
                  },
                  "&:hover fieldset": {
                    // borderColor: "#16f2b3",
                  },
                },
                "& .MuiInputBase-input": {
                  // color: "#fff",
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Your Message"
              variant="outlined"
              multiline
              rows={4}
              value={userInput.message}
              required
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              inputProps={{ maxLength: 500 }}
              sx={{
                bgcolor: "background.default",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    // borderColor: "#353a52",
                  },
                  "&:hover fieldset": {
                    // borderColor: "#16f2b3",
                  },
                },
                "& .MuiInputBase-input": {
                  // color: "#fff",
                },
              }}
            />
          </Grid>
        </Grid>
        {error.required && (
          <Typography mt={2} color="error" variant="body2">
            Name, Email, and Message are required!
          </Typography>
        )}
        <Box mt={4} textAlign="center">
          <Button
            onClick={handleSendMail}
            variant="contained"
            endIcon={
              loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                <SendIcon />
              )
            }
            sx={{
              background: gradients.primary,
              px: 4,
              py: 1.5,
              textTransform: "uppercase",
              transition: "0.3s",
              "&:hover": {
                background: gradients.secondary,
              },
              fontWeight: "bold",
            }}
            disabled={loading}
          >
            {loading ? <CircularProgress /> : "Send Message"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactWithoutCaptcha;
