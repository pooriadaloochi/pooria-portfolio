import { useState } from "react";
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
  Stack,
} from "@mui/material";
import { useTranslation } from "react-i18next";

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

export function PdContactWithoutCaptcha() {
  const { gradients } = useTheme().palette;
  const { t } = useTranslation();
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
      yourEmail: process.env.REACT_APP_YOUR_EMAIL,
      description: process.env.REACT_APP_YOUR_DESCRIPTION ?? "",
      yourServiceId: process.env.REACT_APP_YOUR_SERVICE_ID ?? "",
      yourTemplateId: process.env.REACT_APP_YOUR_TEMPLATE_ID ?? "",
      yourUserId: process.env.REACT_APP_YOUR_USER_ID,
    };

    const templateParams = {
      from_name: userInput.email,
      user_name: userInput.name,
      to_name: contactConfig.yourEmail,
      message: userInput.message,
    };
    try {
      setLoading(true);
      const result = await emailjs.send(
        contactConfig.yourServiceId,
        contactConfig.yourTemplateId,
        templateParams,
        contactConfig.yourUserId
      );
      if (result.status === 200) {
        toast.success(t("contactMe.form.submit.success"));
        setUserInput({ name: "", email: "", message: "" });
      } else {
        toast.error(t("contactMe.form.submit.error"));
      }
    } catch {
      toast.error(t("contactMe.form.submit.error"));
    } finally {
      setLoading(false);
    }
  };
  const TextFieldCommonProps = {
    fullWidth: true,
    required: true,
    inputProps: { maxLength: 100 },
    sx: { bgcolor: "background.default" },
  };
  return (
    <Stack justifyContent="center">
      <Box
        maxWidth="sm"
        border={1}
        borderColor="grey.800"
        p={3}
        borderRadius={2}
        bgcolor="background.paper"
        display="flex"
        flexDirection="column"
        mx={{ xs: "auto", lg: 0 }}
      >
        <Typography variant="body2" color="textPrimary">
          {t("contactMe.subtitle")}
        </Typography>
        <Grid container spacing={3} mt={3}>
          <Grid item xs={12}>
            <TextField
              {...TextFieldCommonProps}
              variant="outlined"
              label={t("contactMe.form.name.label")}
              value={userInput.name}
              required
              onChange={(e) =>
                setUserInput({ ...userInput, name: e.target.value })
              }
              onBlur={checkRequired}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...TextFieldCommonProps}
              variant="outlined"
              fullWidth
              label={t("contactMe.form.email.label")}
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
              sx={{ direction: "ltr" }}
              error={error.email}
              helperText={error.email ? t("contactMe.form.email.error") : ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              {...TextFieldCommonProps}
              variant="outlined"
              label={t("contactMe.form.message.label")}
              multiline
              rows={4}
              value={userInput.message}
              required
              error={error.required}
              onChange={(e) =>
                setUserInput({ ...userInput, message: e.target.value })
              }
              onBlur={checkRequired}
              inputProps={{ maxLength: 500 }}
            />
          </Grid>
        </Grid>
        {error.required && (
          <Typography mt={2} color="error" variant="body2">
            {t("contactMe.form.message.error")}
          </Typography>
        )}
        <Box mt={4} textAlign="center">
          <Button
            onClick={handleSendMail}
            variant="contained"
            sx={{
              width: "fit-content",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              background: gradients.primary,
              textTransform: "uppercase",
              transition: "0.3s",
              "&:hover": {
                background: gradients.secondary,
              },
              fontWeight: "bold",
            }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              <>
                <SendIcon sx={{ mx: 1 }} /> {t("contactMe.form.submit.label")}
              </>
            )}
          </Button>
        </Box>
      </Box>
    </Stack>
  );
}
