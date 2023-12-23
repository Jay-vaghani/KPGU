import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { CheckCircleRounded } from "@mui/icons-material";

function GoalsSection() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  return (
    <Grid
      container
      width={maxWidth}
      mx={"auto"}
      mt={7}
      p={"3%"}
      py={5}
      className="smooth-shadow rounded-4"
    >
      <Grid
        item
        order={{
          xs: 1,
          md: 0,
        }}
        xs={12}
        md={6}
        bgcolor={"primary.main"}
        color={"#fff"}
        borderRadius={"0px 50px 0px 50px"}
      >
        <Box p={"7%"}>
          <Typography variant="h2" className="journey-heading-2" gutterBottom>
            VISION
          </Typography>
          <Typography variant="body1" className="journey-text">
            KPGU dreams of global acclaim, a value-driven beacon where teaching
            ignites, research delves deep, and outreach bridges borders. Open
            doors welcome diverse minds to a tapestry woven with collaboration
            and innovation. Education, a sculptor of responsible citizens,
            shapes not just graduates, but leaders with hearts for the world's
            grand tapestry.
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        order={{
          xs: 0,
          md: 1,
        }}
        xs={12}
        md={6}
        position={"relative"}
        zIndex={-10}
        height={400}
        sx={{
          transform: {
            xs: "0%",
            md: "translateX(-9.5%)",
          },
          overflowX: {
            xs: "clip",
            md: "visible",
          },
        }}
      >
        <img
          src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703227665/KPGU/Banners/vision-banner.webp"
          alt="mission banner"
          width={"109.5%"}
          height={
            innerWidth < 1025
              ? innerWidth < 941
                ? "123.5%"
                : "117%"
              : "110.5%"
          }
          className="object-fit-cover"
        />
      </Grid>
      <Grid
        item
        order={{
          xs: 2,
          md: 2,
        }}
        xs={12}
        md={6}
        position={"relative"}
        zIndex={-10}
        height={400}
        sx={{
          transform: "translateY(-10.5%)",
          overflowX: {
            xs: "clip",
            md: "visible",
          },
        }}
      >
        <img
          src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703227665/KPGU/Banners/mission-banner.webp"
          alt="mission banner"
          width={"109.5%"}
          height={
            innerWidth < 990
              ? innerWidth < 989
                ? innerWidth < 909
                  ? "121.5%"
                  : "114%"
                : "115.5%"
              : "110.5%"
          }
          className="object-fit-cover"
          style={{ borderRadius: innerWidth < 900 ? "0" : "0 32% 0 0" }}
        />
      </Grid>
      <Grid
        item
        order={{
          xs: 3,
          md: 3,
        }}
        xs={12}
        md={6}
        bgcolor={"secondary.main"}
        color={"#fff"}
        borderRadius={"0px 50px 0px 50px"}
      >
        <Box p={"7%"}>
          <Typography variant="h2" className="journey-heading-2" gutterBottom>
            MISSION
          </Typography>
          <Typography variant="body1" className="journey-text">
            KPGU ignites vibrant minds within its diverse tapestry, woven with
            threads of a changing world. Drawn by exceptional faculty, students
            collaborate, innovate, and flourish. Education, a sculptor of
            well-rounded individuals, kindles scientific spirit, empathy, and
            creativity. Here, not just professionals emerge, but responsible
            citizens and leaders, empowered to leave a lasting mark on the
            global landscape.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default GoalsSection;
