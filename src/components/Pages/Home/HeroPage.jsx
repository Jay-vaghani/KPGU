import React, { useState } from "react";
import { Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function HeroPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        loop
      >
        <SwiperSlide style={{ height: "100vh" }}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/hero-banner-1"
            alt="banner1"
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100vh" }}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/hero-banner-2"
            alt="banner2"
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100vh" }}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/hero-banner-3"
            alt="banner2"
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100vh" }}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/hero-banner-4"
            alt="banner2"
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroPage;
