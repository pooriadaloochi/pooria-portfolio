import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { isValidEmail } from "./PdContactWithoutCaptcha";

export function PdContactWithCaptcha() {
  const [input, setInput] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });

  const [captcha, setCaptcha] = useState<string | null>(null);
  const [error, setError] = useState<{
    email: boolean;
    required: boolean;
  }>({
    email: false,
    required: false,
  });

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError((prev) => ({ ...prev, required: false }));
    }
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      toast.error("Please complete the captcha!");
      return;
    }

    if (!input.email || !input.message || !input.name) {
      setError((prev) => ({ ...prev, required: true }));
      return;
    } else if (error.email) {
      return;
    } else {
      setError((prev) => ({ ...prev, required: false }));
    }

    const serviceID = import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const options = {
      publicKey: import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    };

    // try {
    //   const res = await emailjs.send(serviceID, templateID, input, options);
    //   const teleRes = await axios.post(
    //     `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
    //     input
    //   );

    //   if (res.status === 200 || teleRes.status === 200) {
    //     toast.success("Message sent successfully!");
    //     setInput({
    //       name: "",
    //       email: "",
    //       message: "",
    //     });
    //     setCaptcha(null);
    //   }
    // } catch (error: any) {
    //   toast.error(error?.text || error.message);
    // }
  };

  return (
    <Box>
      <Box
        maxWidth="md"
        sx={{
          textAlign: "left",
          color: "white",
          borderRadius: "8px",
          border: "1px solid #464c6a",
          p: 4,
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: "#d3d8e8", marginBottom: "16px" }}
        >
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </Typography>
        <Box component="form" onSubmit={handleSendMail} sx={{ mt: 2 }}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            onBlur={checkRequired}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            type="email"
            required
            value={input.email}
            onChange={(e) => {
              setInput({ ...input, email: e.target.value });
              setError((prev) => ({
                ...prev,
                email: !isValidEmail(e.target.value),
              }));
            }}
            onBlur={checkRequired}
            error={error.email}
            helperText={error.email && "Please provide a valid email!"}
            sx={{ mb: 3 }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            required
            multiline
            rows={4}
            value={input.message}
            onChange={(e) => setInput({ ...input, message: e.target.value })}
            onBlur={checkRequired}
            sx={{ mb: 3 }}
          />
          <ReCAPTCHA
            sitekey={import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY!}
            onChange={(code) => setCaptcha(code)}
          />
          {error.required && (
            <Typography
              variant="body2"
              sx={{ color: "red", marginBottom: "16px" }}
            >
              All fields are required!
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
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
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
