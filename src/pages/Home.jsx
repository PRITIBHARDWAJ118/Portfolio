import { useCallback, useState } from "react";
import AboutModal from "../components/AboutModal/AboutModal";
import Hero from "../components/Hero/Hero";
import ContinueExploring from "../components/ContinueExploring/ContinueExploring";
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects";
import TopSkills from "../components/TopSkills/TopSkills";
import Achievements from "../components/Achievements/Achievements";
import Participations from "../components/Participations/Participations";

function Home() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const closeAbout = useCallback(() => setIsAboutOpen(false), []);

  return (
    <main>
      <Hero />
      <ContinueExploring onAboutOpen={() => setIsAboutOpen(true)} />
      <FeaturedProjects />
      <TopSkills />
      <Achievements />
      <Participations />
      {isAboutOpen && <AboutModal onClose={closeAbout} />}
    </main>
  );
}

export default Home;
