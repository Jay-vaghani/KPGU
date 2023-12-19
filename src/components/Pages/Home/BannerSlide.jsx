import { Box, Grid, Stack } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import Carousel from "react-material-ui-carousel";

function BannerSlide() {
  const { maxWidth } = useContext(AppContext);

  var slides = [
    {
      bannerImg:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/banner-1",
    },
    {
      bannerImg:
        "https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/banner-2",
    },
  ];

  return (
    <Stack minHeight={"100vh"}>
      <Carousel
        indicators={false}
        height={"100vh"}
        navButtonsAlwaysInvisible={true}
      >
        {slides.map((item, index) => (
          <Box
            key={index}
            height={"100%"}
            color={"#fff"}
            p={1}
            sx={{
              background: `linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.3) 100%), url(${item.bannerImg}) center / cover`,
            }}
          >
            <Stack
              height={"100%"}
              direction={"row"}
              alignItems={"flex-end"}
              justifyContent={"space-around"}
            >
              <Grid container maxWidth={maxWidth} mx={"auto"}>
                <Grid item xs={12} sm={7.5}>
                  <h1 className="banner-heading">KPGU</h1>
                  <p className="banner-text">
                    KPGU has always been at the forefront when it comes to
                    modern technology and has been recognized as highly
                    preferable choice for Computer Science and Engineering
                  </p>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4.5}
                  alignItems={"center"}
                  justifyContent={{
                    xs: "center",
                    sm: "end",
                  }}
                  display={"flex"}
                >
                  <img
                    src="https://res.cloudinary.com/dby2vbxv3/image/upload/f_auto,q_auto/v1/KPGU/Banners/g20-image"
                    alt="G20"
                    style={{
                      maxWidth: 300,
                      width: "100%",
                      borderRadius: "15px",
                    }}
                  />
                </Grid>
              </Grid>
            </Stack>
          </Box>
        ))}
      </Carousel>
    </Stack>
  );
}

export default BannerSlide;
