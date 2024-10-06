import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { toast } from "react-toastify";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
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

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const options = {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
    };

    // setLoading(true);
    // try {
    //   // Simulate the send email function (use actual emailJS send function in practice)
    //   const res = await emailjs.send(serviceID, templateID, userInput, options);
    //   const teleRes = await axios.post(
    //     `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
    //     userInput
    //   );

    //   if (res.status === 200 || teleRes.status === 200) {
    //     toast.success("Message sent successfully!");
    //     setUserInput({
    //       name: "",
    //       email: "",
    //       message: "",
    //     });
    //   }
    // } catch (error: any) {
    //   toast.error(
    //     error?.text || "An error occurred while sending the message."
    //   );
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Box>
      <Typography
        variant="h6"
        component="p"
        fontWeight="medium"
        mb={5}
        color="#16f2b3"
        textTransform="uppercase"
      >
        Contact with me
      </Typography>
      <Box
        maxWidth="sm"
        border={1}
        borderColor="#464c6a"
        p={3}
        borderRadius={2}
        bgcolor="#10172d"
      >
        <Typography variant="body2" color="#d3d8e8">
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
                bgcolor: "#10172d",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#353a52",
                  },
                  "&:hover fieldset": {
                    borderColor: "#16f2b3",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#fff",
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
                bgcolor: "#10172d",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#353a52",
                  },
                  "&:hover fieldset": {
                    borderColor: "#16f2b3",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#fff",
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
                bgcolor: "#10172d",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#353a52",
                  },
                  "&:hover fieldset": {
                    borderColor: "#16f2b3",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#fff",
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
              background: "linear-gradient(to right, #f50057, #3f51b5)",
              px: 4,
              py: 1.5,
              textTransform: "uppercase",
              transition: "all 0.3s",
              "&:hover": {
                background: "linear-gradient(to right, #3f51b5, #f50057)",
              },
              fontWeight: "bold",
              color: "#fff",
            }}
            disabled={loading}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactWithoutCaptcha;
