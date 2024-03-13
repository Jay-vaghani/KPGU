import {
  Box,
  Button,
  Grid,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import React, { useContext, useRef } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";

import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
  CallRounded,
  FormatQuote,
} from "@mui/icons-material";

function Testimonials() {
  const { maxWidth, innerWidth } = useContext(AppContext);
  const swiperRef = useRef(null);

  const CustomButton = ({ onClick, side }) => {
    return (
      <Button variant="contained" color="secondary" onClick={onClick}>
        {side === "right" ? (
          <ArrowForwardIosRounded />
        ) : (
          <ArrowBackIosNewRounded />
        )}
      </Button>
    );
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <Grid
      container
      width={maxWidth}
      mx={"auto"}
      mt={7}
      p={"5%"}
      py={5}
      className="smooth-shadow rounded-4"
      rowGap={innerWidth > 1200 ? 0 : 4}
      bgcolor={"#fff"}
    >
      <Grid item xs={12} lg={4}>
        <Box pr={3}>
          <h2 className="fs-1 text-uppercase fw-semibold ">
            Listen What Our Students Say
          </h2>
          <Typography variant="h5" mb={2}>
            Hear real students' journeys, uncover their passions, and gain
            genuine insights and understanding of diverse paths taken by
            individuals in pursuit of academic and personal goals. Let these
            narratives guide you in making informed decisions and inspire your
            own journey towards success and fulfillment.
          </Typography>
        </Box>

        <Button
          disableElevation
          href="tel:8238046519"
          size="large"
          startIcon={<CallRounded />}
          variant="contained"
          color="secondary"
        >
          <Box
            display={{
              xs: "none",
              sm: "block",
            }}
          >
            <Typography variant="caption" fontSize={"inherit"}>8238046519</Typography>
          </Box>
          <Box
            display={{
              xs: "block",
              sm: "none",
            }}
          >
            contact now
          </Box>
        </Button>
      </Grid>
      <Grid item xs={12} lg={8} overflow={"clip"}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          ref={swiperRef}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper"
          modules={[Autoplay, Navigation, FreeMode]}
          loop={true}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            950: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1300: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Box>
              <Box>
                <img
                  src="https://octaveanalytics.com/wp-content/uploads/2018/07/Testimonials-image04.jpg"
                  alt="Testimonial"
                  className="w-100 h-100 object-fit-cover"
                />
              </Box>
              <Box
                py={1}
                bgcolor={"secondary.main"}
                sx={{ opacity: 0.9 }}
                display={"flex"}
                justifyContent={"end"}
                pr={2}
                position={"relative"}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "-75%",
                    bgcolor: "secondary.main",
                  }}
                >
                  <FormatQuote sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontSize={"1.08rem"}
                  fontWeight={500}
                  mt={4}
                >
                  BITS Institute of Physiotherapy is much beyond just an
                  institution. It actually denotes a 'Culture'. A culture of
                  excellence, empowerment and enrichment. My memories at BITS
                  are quite vivid and I will always cherish the myriad of
                  eyneriences l have had here
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="h6" fontWeight={600}>
                  Ruturajsinh Rana
                </Typography>
                <Typography variant="h6" color={"#b4b4b4"}>
                  Mechanical
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Box>
                <img
                  src="https://octaveanalytics.com/wp-content/uploads/2018/07/Testimonials-image05.jpg"
                  alt="Testimonial"
                  className="w-100 h-100 object-fit-cover"
                />
              </Box>
              <Box
                py={1}
                bgcolor={"secondary.main"}
                sx={{ opacity: 0.9 }}
                display={"flex"}
                justifyContent={"end"}
                pr={2}
                position={"relative"}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "-75%",
                    bgcolor: "secondary.main",
                  }}
                >
                  <FormatQuote sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontSize={"1.08rem"}
                  fontWeight={500}
                  mt={4}
                >
                  I did graduate from BITS edu Campus but it's like I've never
                  left the place. The memories are still fresh in my mind. The
                  four years in the institute have been amazing. Shared
                  beautiful moments with Friends, Batchmates and Professors
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="h6" fontWeight={600}>
                  Shruti A. Pandey
                </Typography>
                <Typography variant="h6" color={"#b4b4b4"}>
                  Physiotherapist
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Box>
                <img
                  src="https://octaveanalytics.com/wp-content/uploads/2018/07/Testimonials-image09.jpg"
                  alt="Testimonial"
                  className="w-100 h-100 object-fit-cover"
                />
              </Box>
              <Box
                py={1}
                bgcolor={"secondary.main"}
                sx={{ opacity: 0.9 }}
                display={"flex"}
                justifyContent={"end"}
                pr={2}
                position={"relative"}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "-75%",
                    bgcolor: "secondary.main",
                  }}
                >
                  <FormatQuote sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontSize={"1.08rem"}
                  fontWeight={500}
                  mt={4}
                >
                  One of the finest institute where we get an opportunity to
                  shape our skills into knowledge to prepare our self for
                  industry. I am thankful to all the teachers and staff members
                  to help us to achieve our goals.
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="h6" fontWeight={600}>
                  Priya Pancholi
                </Typography>
                <Typography variant="h6" color={"#b4b4b4"}>
                  Research Scientist
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Box>
                <img
                  src="https://octaveanalytics.com/wp-content/uploads/2018/07/Testimonials-image07.jpg"
                  alt="Testimonial"
                  className="w-100 h-100 object-fit-cover"
                />
              </Box>
              <Box
                py={1}
                bgcolor={"secondary.main"}
                sx={{ opacity: 0.9 }}
                display={"flex"}
                justifyContent={"end"}
                pr={2}
                position={"relative"}
              >
                <IconButton
                  sx={{
                    position: "absolute",
                    top: "-75%",
                    bgcolor: "secondary.main",
                  }}
                >
                  <FormatQuote sx={{ color: "#fff" }} />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  fontSize={"1.08rem"}
                  fontWeight={500}
                  mt={4}
                >
                  KPGU's collaborative environment opened my eyes to different
                  perspectives and challenged my own thinking. Working with
                  students from various backgrounds prepared me for the
                  multicultural realities of the global workforce.
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="h6" fontWeight={600}>
                  Dishant Hiteshkumar Shah
                </Typography>
                <Typography variant="h6" color={"#b4b4b4"}>
                  E&C
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <Stack direction={"row"} spacing={1} mt={2}>
            <CustomButton onClick={handlePrev} side="left" />
            <CustomButton onClick={handleNext} side="right" />
          </Stack>
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default Testimonials;
