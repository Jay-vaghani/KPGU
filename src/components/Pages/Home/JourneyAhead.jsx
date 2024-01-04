import React, { useContext } from "react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { Button } from "@mui/material";
import { PhotoLibraryRounded, SchoolRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  InnovationIcon,
  JobIcon,
  ResearchIcon,
} from "../../../Utils/Icons/CustomIcon";

function JourneyAhead() {
  const { maxWidth } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      <Grid
        container
        width={maxWidth}
        mx={"auto"}
        mt={7}
        p={"3%"}
        className="smooth-shadow rounded-4"
        rowGap={5}
        bgcolor={"#fff"}
      >
        <Grid item xs={12} md={6}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1702964151/KPGU/Banners/about-sub-banner-2.jpg"
            alt="about us"
            className="w-100 h-100 object-fit-cover rounded-4"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          pl={{
            xs: 0,
            md: 4,
          }}
          pb={3}
        >
          <Typography variant="h3" fontWeight={500} className="journey-heading">
            Great Environment
          </Typography>
          <Typography
            variant="body1"
            mb={2}
            fontWeight={500}
            className="about-text"
            mt={1}
          >
            Our campus is a beautiful and vibrant place to live and learn. We
            have state-of-the-art facilities, stunning green spaces, and a
            friendly and welcoming atmosphere for everyone. Join a diverse
            community of learners from all backgrounds and explore your passions
            in a supportive environment.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/campus/gallery")}
            startIcon={<PhotoLibraryRounded />}
            disableElevation
            size="large"
          >
            view gallery
          </Button>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={{
            xs: 2,
            md: 1,
          }}
          pr={{
            xs: 0,
            md: 4,
          }}
          pb={3}
        >
          <Typography variant="h3" fontWeight={500} className="journey-heading">
            Skill Development
          </Typography>
          <Typography
            variant="body1"
            mb={2}
            fontWeight={500}
            className="about-text"
            mt={1}
          >
            At KPGU University, we believe in an education that transcends
            textbook knowledge. Our innovative curriculum seamlessly integrates
            classroom rigor with enriching extracurricular opportunities,
            offering students a dynamic platform to explore their passions,
            discover hidden talents, and develop into well-rounded citizens
            prepared to thrive in a complex and ever-changing world.
          </Typography>
          <Button
            variant="contained"
            startIcon={<SchoolRounded />}
            disableElevation
            size="large"
          >
            view course
          </Button>
        </Grid>
        <Grid item xs={12} md={6} order={1}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1702964151/KPGU/Banners/about-sub-banner-1.jpg"
            alt="about us"
            className="w-100 h-100 object-fit-cover rounded-4"
          />
        </Grid>
      </Grid>
      <Grid
        container
        width={maxWidth}
        mx={"auto"}
        mt={7}
        className="smooth-shadow rounded-4"
        p={"3%"}
        py={5}
        bgcolor={"#fff"}
      >
        <Typography
          variant="h2"
          className="journey-heading-2"
          fontWeight={600}
        >
          TO THE JOURNEY AHEAD
        </Typography>
        <Grid container mt={3} spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box borderRadius={4} p={1} className="journey-card">
              <Box position={"relative"}>
                <img
                  src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703145152/KPGU/Banners/innovation-banner.webp"
                  alt="innovation banner"
                  className="object-fit-cover rounded-4"
                  width={"100%"}
                  height={"320px"}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    zIndex: 999,
                    bgcolor: "#fff",
                    border: "2px solid #264796",
                    scale: "200%",
                    transform: "translate(-30%)",
                  }}
                  color="secondary"
                >
                  <InnovationIcon />
                </IconButton>
              </Box>
              <Box
                mt={7}
                height={{
                  xs: "auto",
                  sm: "230px",
                  lg: "170px",
                }}
              >
                <Typography
                  variant="h4"
                  className="journey-card-heading"
                  textTransform={"capitalize"}
                  fontWeight={600}
                  gutterBottom
                >
                  Innovation with higher education
                </Typography>
                <Typography
                  variant="body1"
                  textTransform={"capitalize"}
                  fontWeight={500}
                >
                  KPGU aims at providing students with industry centric
                  knowledge & improve the system & academic professionalism
                  regularly.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box borderRadius={4} p={1} className="journey-card">
              <Box position={"relative"}>
                <img
                  src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703150037/KPGU/Banners/placement.webp"
                  alt="innovation banner"
                  className="object-fit-cover rounded-4"
                  width={"100%"}
                  height={"320px"}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    zIndex: 999,
                    bgcolor: "#fff",
                    border: "2px solid #264796",
                    scale: "200%",
                    transform: "translate(-30%)",
                  }}
                  color="secondary"
                >
                  <JobIcon />
                </IconButton>
              </Box>
              <Box
                mt={7}
                height={{
                  xs: "auto",
                  sm: "230px",
                  lg: "170px",
                }}
              >
                <Typography
                  variant="h4"
                  className="journey-card-heading"
                  textTransform={"capitalize"}
                  fontWeight={600}
                  gutterBottom
                >
                  Campus Recruitment and placement
                </Typography>
                <Typography
                  variant="body1"
                  textTransform={"capitalize"}
                  fontWeight={500}
                >
                  KPGU has an excellent Industry - Institution interaction with
                  all the renowned and reputed companies visiting the campus.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box borderRadius={4} p={1} className="journey-card">
              <Box position={"relative"}>
                <img
                  src="https://res.cloudinary.com/dby2vbxv3/image/upload/c_crop,g_auto,h_753,w_1000/KPGU/Banners/research-banner.jpg"
                  alt="innovation banner"
                  className="object-fit-cover rounded-4"
                  width={"100%"}
                  height={"320px"}
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: "-20px",
                    left: "50%",
                    zIndex: 999,
                    bgcolor: "#fff",
                    border: "2px solid #264796",
                    scale: "200%",
                    transform: "translate(-30%)",
                  }}
                  color="secondary"
                >
                  <ResearchIcon />
                </IconButton>
              </Box>
              <Box
                mt={7}
                height={{
                  xs: "auto",
                  sm: "230px",
                  lg: "170px",
                }}
              >
                <Typography
                  variant="h4"
                  className="journey-card-heading"
                  textTransform={"capitalize"}
                  fontWeight={600}
                  gutterBottom
                >
                  Research
                </Typography>
                <Typography
                  variant="body1"
                  textTransform={"capitalize"}
                  fontWeight={500}
                >
                  KPGU has an excellent Industry - Institution interaction with
                  all the renowned and reputed companies visiting the campus.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default JourneyAhead;

{
  /* <Button startIcon={<HomeIcon />} variant="contained">Recrument</Button> */
}
