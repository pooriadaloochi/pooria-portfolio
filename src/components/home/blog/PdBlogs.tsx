"use client";
import { Box, Button, Typography, Grid, Divider } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PdBlogCard from "./PdBlogCard";
import { Link } from "react-router-dom";
import { BlogDataType } from "./PdBlogCard";

interface BlogProps {
  blogs: BlogDataType[];
}

export default function PdBlogs({ blogs }: BlogProps) {
  return (
    <Box id="blogs" my={12} position="relative" zIndex={50}>
      <Box
        sx={{
          width: 100,
          height: 100,
          backgroundColor: "violet.100",
          borderRadius: "50%",
          position: "absolute",
          top: 6,
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(3xl)",
          opacity: 0.2,
        }}
      />

      <Box display="flex" justifyContent="center" mb={5}>
        <Divider
          sx={{
            height: 1,
            width: "75%",
            background:
              "linear-gradient(to right, transparent, violet, transparent)",
          }}
        />
      </Box>

      <Box display="flex" justifyContent="center" my={5}>
        <Box display="flex" alignItems="center">
          <Divider
            sx={{
              height: 2,
              width: 24,
              backgroundColor: "#1a1443",
            }}
          />
          <Typography
            sx={{
              backgroundColor: "#1a1443",
              color: "white",
              p: 2,
              px: 5,
              borderRadius: "8px",
              textAlign: "center",
              mx: 2,
              textTransform: "uppercase",
              fontSize: "1.25rem",
            }}
          >
            Blogs
          </Typography>
          <Divider
            sx={{
              height: 2,
              width: 24,
              backgroundColor: "#1a1443",
            }}
          />
        </Box>
      </Box>

      <Grid container spacing={3}>
        {blogs.slice(0, 6).map((blog, index) =>
          blog?.cover_image ? (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PdBlogCard blog={blog} />
            </Grid>
          ) : null
        )}
      </Grid>

      <Box display="flex" justifyContent="center" mt={5}>
        <Link to="/blog">
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundImage: "linear-gradient(to right, #f06292, #ab47bc)",
              px: 4,
              py: 2,
              color: "white",
              textTransform: "uppercase",
              transition: "all 0.2s ease-out",
              "&:hover": {
                backgroundImage: "linear-gradient(to right, #f06292, #ab47bc)",
                transform: "scale(1.05)",
              },
            }}
          >
            View More
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
