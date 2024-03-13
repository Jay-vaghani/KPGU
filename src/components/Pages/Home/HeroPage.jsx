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
      // autoplay={{
      //   delay: 4500,
      //   disableOnInteraction: false,
      // }}
      style={{
        position: "relative",
        zIndex: -999,
      }}
    >
      <SwiperSlide
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%), url('https://res.cloudinary.com/dby2vbxv3/image/upload/v1709961948/KPGU/Banners/banner-1.webp') center / cover",
          height: innerWidth < 768 ? "60vh" : "87vh",
        }}
      >
        <Grid
          container
          maxWidth={maxWidth}
          mx={"auto"}
          direction={"row"}
          p={"5%"}
          height={"100%"}
          alignContent={"center"}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} md={7}>
            <h1 className="display-6 text-white" style={{ fontWeight: 900 }}>Empowering Tomorrow's Pioneers </h1>
            <h1 className="display-4  text-white " style={{ fontWeight: 700 }}>Join KPGU's Pathway to Global Academic Excellence!</h1>
          </Grid>
        </Grid>
      </SwiperSlide>

    </Swiper>
  );
}

export default HeroPage;


{/* <SwiperSlide
style={{
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 40%), url('https://res.cloudinary.com/dby2vbxv3/image/upload/v1707455732/KPGU/Banners/banner-3.jpg') bottom / cover",
  height: "87vh",
}}
>
<Grid
  container
  maxWidth={maxWidth}
  mx={"auto"}
  direction={"row"}
  p={"5%"}
  height={"100%"}
  alignItems={"end"}
  alignContent={"center"}
  justifyContent={"space-between"}
>
  <Grid item xs={12} md={6}>
    <h1 className="display-1 fw-medium text-white ">KPGU</h1>
    <p className="fs-4 fw-semibold  text-white ">
      KPGU has always been at the forefront when it comes to modern
      technology and has been recognized as highly preferable choice for
      Computer Science and Engineering
    </p>
  </Grid>
</Grid>
</SwiperSlide>
<SwiperSlide
style={{
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 50%), url('https://res.cloudinary.com/dby2vbxv3/image/upload/v1703843541/KPGU/campus/KPGU-Gate.webp') 0px 100% / cover",
  height: "87vh",
}}
>
<Grid
  container
  maxWidth={maxWidth}
  mx={"auto"}
  direction={"row"}
  p={"5%"}
  height={"100%"}
  alignItems={"end"}
  alignContent={"center"}
  justifyContent={"space-between"}
>
  <Grid item xs={12} md={6}>
    <h1 className="display-1 fw-medium text-white ">KPGU</h1>
    <p className="fs-4 fw-semibold  text-white ">
      KPGU has always been at the forefront when it comes to modern
      technology and has been recognized as highly preferable choice for
      Computer Science and Engineering
    </p>
  </Grid>
</Grid>
</SwiperSlide>
<SwiperSlide
style={{
  background:
    "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%), url('https://res.cloudinary.com/dby2vbxv3/image/upload/v1707456589/KPGU/Banners/banner-4.jpg') center / cover",
  height: "87vh",
}}
>
<Grid
  container
  maxWidth={maxWidth}
  mx={"auto"}
  direction={"row"}
  p={"5%"}
  height={"100%"}
  alignItems={"end"}
  alignContent={"center"}
  justifyContent={"space-between"}
>
  <Grid item xs={12} md={6}>
    <h1 className="display-1 fw-medium text-white ">KPGU</h1>
    <p className="fs-4 fw-semibold  text-white ">
      KPGU has always been at the forefront when it comes to modern
      technology and has been recognized as highly preferable choice for
      Computer Science and Engineering
    </p>
  </Grid>
</Grid>
</SwiperSlide> */}