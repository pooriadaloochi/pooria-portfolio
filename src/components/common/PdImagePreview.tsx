import { useState } from "react";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Close, Fullscreen } from "@mui/icons-material";

interface PdImagePreviewProps {
  imageUrl: string;
  alt: string;
}

export function PdImagePreview({ imageUrl, alt }: PdImagePreviewProps) {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Stack mt={2}>
      <Box
        position="relative"
        display="inline-block"
        sx={{
          "&:hover .preview-button": {
            opacity: 1,
          },
        }}
      >
        <img
          src={imageUrl}
          alt="Preview"
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <Box
          onClick={handleOpen}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
            transition: "opacity 0.3s",
            cursor: "pointer",
            "&:hover": {
              opacity: 1,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
          }}
        >
          <Stack>
            <Fullscreen sx={{ fontSize: 48 }} />
            <Typography>{t("common.preview")}</Typography>
          </Stack>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        onBlur={handleClose}
        fullWidth
        maxWidth="lg"
        fullScreen
      >
        <DialogContent
          sx={{
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          }}
        >
          <img
            src={imageUrl}
            alt={alt}
            style={{
              maxWidth: "100%",
              maxHeight: "100vh",
              objectFit: "contain",
            }}
          />
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "#fff",
            }}
          >
            <Close />
          </IconButton>
        </DialogContent>
      </Dialog>
    </Stack>
  );
}
