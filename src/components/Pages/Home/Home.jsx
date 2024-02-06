import React from "react";
import HeroPage from "./HeroPage";
import Testimonials from "./Testimonials";
import AboutSection from "./AboutSection";
import FacultyAndCollageSection from "./FacultyAndCollageSection";
import EventsSection from "./EventsSection";
import KpguMilestones from "./KpguMilestones";

function Home() {
  return (
    <div>
      <HeroPage />
      <AboutSection />
      <KpguMilestones />
      <FacultyAndCollageSection />
      <EventsSection />
      <Testimonials />
    </div>
  );
}

export default Home;
