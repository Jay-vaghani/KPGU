import React from "react";
import { Stack } from "react-bootstrap";
import BannerSlide from "./BannerSlide";
import AboutSection from "./AboutSection";
import JourneyAhead from "./JourneyAhead";
import GoalsSection from "./GoalsSection";
import Testimonials from "./Testimonials";

// import required modules

function Home() {
  return (
    <Stack>
      <BannerSlide />
      <AboutSection />
      <JourneyAhead />
      <GoalsSection />
      <Testimonials />
    </Stack>
  );
}

export default Home;
