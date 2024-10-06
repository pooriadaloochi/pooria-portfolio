import { Box, Button, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CodeIcon from "@mui/icons-material/Code";
import { personalData } from "../../../api/personalData";
import PdCoderCard, { DataProps } from "../../coder/PdCoder";
import Typewriter from "typewriter-effect";

const coderData: DataProps[] = [
  { key: "name", value: "Pooria Daloochi" },
  {
    key: "skills",
    value: [
      "React",
      "NextJS",
      "Redux",
      "Express",
      "NestJS",
      "MySql",
      "MongoDB",
      "Docker",
      "AWS",
    ],
  },
  { key: "hardWorker", value: true },
  { key: "quickLearner", value: true },
  { key: "problemSolver", value: true },
  { key: "teamPlayer", value: true },
];
const introdata = {
  title: "I’m Pooria Daloochi",
  animated: {
    first: "I love coding",
    second: "I create high-performance web applications",
    third: "I build scalable systems",
  },
  description:
    "Full-Stack Developer with over 7 years of experience in building modern, efficient, and scalable applications, specializing in React, Node.js, and TypeScript.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

function PdHeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        py: { xs: 4, lg: 12 },
      }}
    >
      <Box
        component="img"
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        sx={{
          position: "absolute",
          top: "-98px",
          zIndex: -10,
          width: "100%",
        }}
      />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
          gap: { xs: 4, lg: 12 },
          alignItems: "start",
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            order: { xs: 2, lg: 1 },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            p: 2,
            pb: { xs: 20, md: 10 },
            pt: { lg: 10 },
          }}
        >
          <Typewriter
            options={{
              strings: [
                introdata.animated.first,
                introdata.animated.second,
                introdata.animated.third,
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 10,
            }}
          />

          <Box sx={{ my: 6, display: "flex", alignItems: "center", gap: 2 }}>
            {[
              {
                href: personalData.github,
                icon: <GitHubIcon fontSize="large" />,
              },
              {
                href: personalData.linkedIn,
                icon: <LinkedInIcon fontSize="large" />,
              },
              {
                href: personalData.facebook,
                icon: <FacebookIcon fontSize="large" />,
              },
              {
                href: personalData.leetcode,
                icon: <CodeIcon fontSize="large" />,
              },
              {
                href: personalData.twitter,
                icon: <TwitterIcon fontSize="large" />,
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                sx={{
                  color: "pink",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.25)",
                  },
                }}
              >
                {item.icon}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Link href="#contact" underline="none">
              <Button
                variant="contained"
                startIcon={<ContactMailIcon />}
                sx={{
                  backgroundImage: "linear-gradient(to right, violet, pink)",
                  p: { xs: 1, md: 2 },
                  color: "white",
                  borderRadius: "50px",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease-out",
                  "&:hover": {
                    backgroundImage: "linear-gradient(to right, pink, violet)",
                    gap: 3,
                  },
                }}
              >
                Contact me
              </Button>
            </Link>

            <Link href={personalData.resume} target="_blank" underline="none">
              <Button
                variant="contained"
                endIcon={<DownloadIcon />}
                sx={{
                  backgroundImage: "linear-gradient(to right, pink, violet)",
                  px: { xs: 3, md: 8 },
                  py: { xs: 1, md: 2 },
                  color: "white",
                  borderRadius: "50px",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease-out",
                  "&:hover": {
                    backgroundImage: "linear-gradient(to right, violet, pink)",
                    gap: 3,
                  },
                }}
              >
                Get Resume
              </Button>
            </Link>
          </Box>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            order: { xs: 1, lg: 2 },
            border: "1px solid #1b2c68a0",
            borderRadius: "8px",
            backgroundImage: "linear-gradient(to right, #0d1224, #0a0d37)",
            p: 4,
            position: "relative",
          }}
        >
          <PdCoderCard data={coderData} title="developer" />

          {/* <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
            <Box
              sx={{
                height: "1px",
                width: "100%",
                backgroundImage:
                  "linear-gradient(to right, transparent, pink 50%, violet)",
              }}
            />
          </Box>
          <Box sx={{ px: { xs: 4, lg: 8 }, py: 5 }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box
                sx={{
                  height: "12px",
                  width: "12px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                }}
              />
              <Box
                sx={{
                  height: "12px",
                  width: "12px",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                }}
              />
              <Box
                sx={{
                  height: "12px",
                  width: "12px",
                  borderRadius: "50%",
                  backgroundColor: "lightgreen",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              overflow: "hidden",
              borderTop: "2px solid #1b2c68a0",
              px: { xs: 4, lg: 8 },
              py: { xs: 4, lg: 8 },
            }}
          >
            <Box
              component="code"
              sx={{
                fontFamily: "monospace",
                fontSize: { xs: "0.75rem", lg: "1rem" },
              }}
            >
              <Box className="blink">
                <Typography component="span" sx={{ mr: 1, color: "pink" }}>
                  const
                </Typography>
                <Typography component="span" sx={{ mr: 1, color: "white" }}>
                  coder
                </Typography>
                <Typography component="span" sx={{ mr: 1, color: "pink" }}>
                  =
                </Typography>
                <Typography component="span" sx={{ color: "gray" }}>
                  {"{"}
                </Typography>
              </Box>
              <Typography component="div" sx={{ color: "white", ml: 2 }}>
                name: <span style={{ color: "orange" }}>'Abu Said'</span>
              </Typography>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default PdHeroSection;
