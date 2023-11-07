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
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode]}
        loop
      >
        {/* <BannerSlide /> */}
        <SwiperSlide
          style={{
            ...swiperCss,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 100%) , url('https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/hero-banner-1') center /cover",
          }}
        >
          <Stack px={2} mt={10}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Typography variant="h2" letterSpacing={2}>
                  TITLE
                </Typography>
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur magni amet esse beatae facere itaque, sapiente,
                  molestiae rem incidunt error dolore sed odio. Rerum dolor
                  cupiditate dolorum, ea nam natus deleniti neque facere iste
                  corporis.
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </SwiperSlide>
        <SwiperSlide
          style={{
            ...swiperCss,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 100%) , url('https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/hero-banner-2') center /cover",
          }}
        >
          <Stack px={2} mt={10}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Typography variant="h2" letterSpacing={2}>
                  TITLE
                </Typography>
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur magni amet esse beatae facere itaque, sapiente,
                  molestiae rem incidunt error dolore sed odio. Rerum dolor
                  cupiditate dolorum, ea nam natus deleniti neque facere iste
                  corporis.
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </SwiperSlide>
        <SwiperSlide
          style={{
            ...swiperCss,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 100%) , url('https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/hero-banner-3') center /cover",
          }}
        >
          <Stack px={2} mt={10}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Typography variant="h2" letterSpacing={2}>
                  TITLE
                </Typography>
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur magni amet esse beatae facere itaque, sapiente,
                  molestiae rem incidunt error dolore sed odio. Rerum dolor
                  cupiditate dolorum, ea nam natus deleniti neque facere iste
                  corporis.
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </SwiperSlide>
        <SwiperSlide
          style={{
            ...swiperCss,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.4) 100%) , url('https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/hero-banner-4') center /cover",
          }}
        >
          <Stack px={2} mt={10}>
            <Grid container>
              <Grid item xs={12} md={8}>
                <Typography variant="h2" letterSpacing={2}>
                  TITLE
                </Typography>
                <Typography variant="h5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur magni amet esse beatae facere itaque, sapiente,
                  molestiae rem incidunt error dolore sed odio. Rerum dolor
                  cupiditate dolorum, ea nam natus deleniti neque facere iste
                  corporis.
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroPage;
