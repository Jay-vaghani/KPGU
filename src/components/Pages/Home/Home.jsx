import React from "react";
import { Stack } from "react-bootstrap";
import BannerSlide from "./BannerSlide";
import AboutSection from "./AboutSection";
import JourneyAhead from "./JourneyAhead";
import Career from "./Career";

// import required modules

function Home() {
  return (
    <Stack>
      <BannerSlide />
      <AboutSection />
      <JourneyAhead />
      <Career />
    </Stack>
  );
}

export default Home;
