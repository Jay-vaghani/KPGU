import React from "react";
import { Stack } from "react-bootstrap";
import BannerSlide from "./BannerSlide";
import AboutSection from "./AboutSection";
import JourneyAhead from "./JourneyAhead";

// import required modules

function Home() {
  return (
    <Stack>
      <BannerSlide />
      <AboutSection />
      <JourneyAhead />
    </Stack>
  );
}

export default Home;
