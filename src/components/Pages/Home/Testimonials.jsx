import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FormatQuote } from "@mui/icons-material";

function Testimonials() {
  const { maxWidth } = useContext(AppContext);

  return (
    <Grid
      container
      width={maxWidth}
      mx={"auto"}
      my={7}
      p={"3%"}
      className="smooth-shadow rounded-4"
    >
      {/* <Grid item xs={12} lg={3}>
        <Typography
          variant="h2"
          className="journey-heading-2"
          gutterBottom
          fontWeight={600}
        >
          Testimonials
        </Typography>
      </Grid> */}
      <Grid item xs={12} lg={9}>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          //   autoplay={{
          //     delay: 2500,
          //     disableOnInteraction: false,
          //   }}
          className="mySwiper"
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
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
                  className="w-100"
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
              <Box minHeight={"300px"} border={2}>
                <Typography variant="body1" className="journey-text" mt={4}>
                  I did graduate from BITS edu Campus but it's like I've never
                  left the place. The memories are still fresh in my mind. The
                  four years in the institute have been amazing. Shared
                  beautiful moments with Friends, Batchmates and Professors.
                </Typography>
              </Box>
              <Box mt={3} bottom={0}>
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
                  className="w-100"
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
              <Box minHeight={"300px"} border={2}>
                <Typography variant="body1" className="journey-text" mt={4}>
                  I did graduate from BITS edu Campus but it's like I've never
                  left the place. The memories are still fresh in my mind. The
                  four years in the institute have been amazing. Shared
                  beautiful moments with Friends, Batchmates and Professors.
                </Typography>
              </Box>
              <Box mt={3} bottom={0}>
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
                  src="https://octaveanalytics.com/wp-content/uploads/2018/07/Testimonials-image08.jpg"
                  alt="Testimonial"
                  className="w-100"
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
              <Box minHeight={"300px"} border={2}>
                <Typography variant="body1" className="journey-text" mt={4}>
                  I did graduate from BITS edu Campus but it's like I've never
                  left the place. The memories are still fresh in my mind. The
                  four years in the institute have been amazing. Shared
                  beautiful moments with Friends, Batchmates and Professors.
                </Typography>
              </Box>
              <Box mt={3} bottom={0}>
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
                  src="https://octaveanalytics.com/wp-content/uploads/2018/07/Testimonials-image07.jpg"
                  alt="Testimonial"
                  className="w-100"
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
              <Typography variant="body1" className="journey-text" mt={4}>
                KPGU ignited a passion for learning I never knew I had. The
                professors are dedicated mentors, and the diverse community
                fostered intellectual growth and personal evolution. I truly
                feel equipped to make a positive impact on the world.
              </Typography>
              <Box mt={3} bottom={0}>
                <Typography variant="h6" fontWeight={600}>
                  Ruturajsinh Rana
                </Typography>
                <Typography variant="h6" color={""}>
                  Mechanical
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box>
              <Box>
                <img
                  src="https://octaveanalytics.com/wp-content/uploads/2018/07/Testimonials-image08.jpg"
                  alt="Testimonial"
                  className="w-100"
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
              <Typography variant="body1" className="journey-text" mt={4}>
                {" "}
              </Typography>
              <Box mt={3} bottom={0}>
                <Typography variant="h6" fontWeight={600}>
                  Ruturajsinh Rana
                </Typography>
                <Typography variant="h6" color={""}>
                  Mechanical
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
                  className="w-100"
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
              <Typography
                variant="body1"
                className="journey-text"
                mt={4}
              ></Typography>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default Testimonials;

// One of the finest institute where we get an opportunity to shape
// our skills into knowledge to prepare our self for industry. I am
// thankful to all the teachers and staff members to help us to
// achieve our goals.

// BITS Institute of Physiotherapy is much beyond just an
// institution. It actually denotes a 'Culture'. A culture of
// excellence, empowerment and enrichment. My memories at BITS are
// quite vivid and I will always cherish the myriad of eyneriences
// l have had here

// KPGU ignited a passion for learning I never knew I had. The
//                 professors are dedicated mentors, and the diverse community
//                 fostered intellectual growth and personal evolution. I truly
//                 feel equipped to make a positive impact on the world.

// I did graduate from BITS edu Campus but it's like I've never
//                 left the place. The memories are still fresh in my mind. The
//                 four years in the institute have been amazing. Shared beautiful
//                 moments with Friends, Batchmates and Professors.

// KPGU planted the seeds of change within me. The focus on global
//                 outreach instilled a sense of responsibility towards the world.
//                 I aspire to use my knowledge and skills to make a lasting
//                 difference in the lives of others.
