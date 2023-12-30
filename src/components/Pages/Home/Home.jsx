import React from "react";
import { Stack } from "react-bootstrap";
import BannerSlide from "./BannerSlide";
import JourneyAhead from "./JourneyAhead";
import Testimonials from "./Testimonials";
import Events from "./Events";
import News from "./News";

// import required modules

function Home() {
  return (
    <Stack>
      <BannerSlide />
      <JourneyAhead />
      <Testimonials />
      <Events />
      <News />
    </Stack>
  );
}

export default Home;
