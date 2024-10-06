import {
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { Link } from "react-router-dom";

export function timeConverter(isoTime: string) {
  const currentTime = new Date().getTime();
  const pastTime = new Date(isoTime).getTime();
  const timeDifference = currentTime - pastTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 30) {
    return `${days} days ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
}
export type BlogDataType = {
  title: string;
  description: string;
  published_at: string;
  reading_time_minutes: number;
  public_reactions_count: number;
  comments_count: number;
  url: string;
  cover_image: string;
};

interface BlogCardProps {
  blog: BlogDataType;
}

export default function PdBlogCard({ blog }: BlogCardProps) {
  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: "#1d293a",
        transition: "all 0.5s",
        bgcolor: "#1b203e",
        "&:hover": {
          borderColor: "#464c6a",
        },
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: { xs: 176, lg: 208 },
          width: "100%",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <img
          src={blog?.cover_image}
          height={1080}
          width={1920}
          alt="Blog Cover"
          style={{
            height: "100%",
            width: "100%",
            transition: "all 0.3s",
          }}
        />
      </Box>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography
            sx={{
              color: "#16f2b3",
              fontSize: "0.875rem",
            }}
          >
            {timeConverter(blog.published_at)}
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <IconButton
              sx={{
                color: "#16f2b3",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              <FavoriteIcon />
              <Typography variant="body2" component="span">
                {blog.public_reactions_count}
              </Typography>
            </IconButton>
            {blog.comments_count > 0 && (
              <IconButton
                sx={{
                  color: "#16f2b3",
                }}
              >
                <CommentIcon />
                <Typography variant="body2" component="span">
                  {blog.comments_count}
                </Typography>
              </IconButton>
            )}
          </Box>
        </Grid>
        <Link to={blog.url} target="_blank">
          <Typography
            sx={{
              my: { xs: 2, lg: 3 },
              cursor: "pointer",
              color: "white",
              fontSize: { xs: "1rem", sm: "1.25rem" },
              fontWeight: "medium",
              transition: "color 0.3s",
              "&:hover": {
                color: "violet",
              },
            }}
          >
            {blog.title}
          </Typography>
        </Link>
        <Typography
          sx={{
            mb: 2,
            color: "#16f2b3",
            fontSize: "0.875rem",
          }}
        >
          {`${blog.reading_time_minutes} Min Read`}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "0.875rem", lg: "1rem" },
            color: "#d3d8e8",
            pb: { xs: 3, lg: 6 },
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {blog.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
