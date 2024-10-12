import PdBlogs from "../components/home/blog/PdBlogs";
import PdContactSection from "../components/home/contact-section/PdContactSection";
import PdEducation from "../components/home/education/PdEducation";
import PdAboutSection from "../components/home/PdAboutSectoin";
import PdExperience from "../components/home/PdExperience";
import PdHeroSection from "../components/home/hero-section/PdHeroSection";
import PdSkills from "../components/home/skills/PdSkills";
import PdProjects from "../components/home/projects/projects";
import { Container } from "@mui/material";

export default function PdHome() {
  return (
    <Container maxWidth="xl">
      <PdHeroSection />
      {/* <PdAboutSection /> */}
      {/* <PdExperience /> */}
      {/* <PdSkills /> */}
      {/* <PdProjects /> */}
      {/* <PdEducation /> */}
      {/* <PdBlogs blogs={[]} /> */}
      {/* <PdContactSection /> */}
    </Container>
  );
}
