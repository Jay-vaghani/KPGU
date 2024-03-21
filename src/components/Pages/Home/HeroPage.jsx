import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import { Box, Grid, Stack } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";

function HeroPage() {
  const { maxWidth, innerWidth } = useContext(AppContext);
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[EffectFade, Autoplay]}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      style={{
        position: "relative",
        zIndex: -999,
      }}
    >
      <SwiperSlide
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%), url('https://res.cloudinary.com/dby2vbxv3/image/upload/v1709961948/KPGU/Banners/banner-1.webp') center / cover",
          height: innerWidth < 768 ? "60vh" : "87vh",
        }}
      >
        <Grid
          container
          maxWidth={maxWidth}
          mx={"auto"}
          direction={"row"}
          px={"5%"}
          py={"2%"}
          height={"100%"}
          alignContent={"end"}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={7}>
            <h3 className=" text-white text-uppercase " style={{ fontWeight: 900, fontFamily: "serif" }}>Empowering Tomorrow's Pioneers </h3>
            <h1 className="display-3  text-white " style={{ fontWeight: 700, fontFamily: "serif" }}>Join KPGU's Pathway to Global Academic Excellence</h1>
          </Grid>
        </Grid>
      </SwiperSlide>
      <SwiperSlide
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%), url('https://res.cloudinary.com/dby2vbxv3/image/upload/v1711006990/KPGU/Banners/banner-6.webp') center / cover",
          height: innerWidth < 768 ? "60vh" : "87vh",
        }}
      >
        <Grid
          container
          maxWidth={maxWidth}
          mx={"auto"}
          direction={"row"}
          px={"5%"}
          py={"2%"}
          height={"100%"}
          alignContent={"end"}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={7}>
            <h3 className=" text-white text-uppercase " style={{ fontWeight: 900, fontFamily: "serif" }}>Empowering Tomorrow's Pioneers </h3>
            <h1 className="display-3  text-white " style={{ fontWeight: 700, fontFamily: "serif" }}>Join KPGU's Pathway to Global Academic Excellence</h1>
          </Grid>
        </Grid>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroPage;