import React, { useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Autoplay } from "swiper/modules";
import BannerSlide from "./BannerSlide";

function HeroPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const swiperCss = {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <>
      
    </>
  );
}

export default HeroPage;
