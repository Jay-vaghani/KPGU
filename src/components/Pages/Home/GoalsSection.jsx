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
      bgcolor={"#fff"}
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
        zIndex={99}

        borderRadius={"0px 50px 0px 50px"}
      >
        <Box p={"7%"}>
          <Typography
            variant="h2"
            className="journey-heading-2"
            fontWeight={500}
            gutterBottom
          >
            VISION
          </Typography>
          <Typography variant="body1" className="journey-text">
            KPGU Aspires to be globally acclaimed a value driven University,
            recognized for excellence in teaching, research and outreach
            promoting access and inclusion collaborative and innovative culture
            and prepare socially responsible global citizens.
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
        zIndex={9}
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
        zIndex={9}
        // height={400}
      >
        <img
          src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703227665/KPGU/Banners/mission-banner.webp"
          alt="mission banner"
          className="object-fit-cover"
          style={{
            width: innerWidth < 901 ? "100%" : "109%",
            height: innerWidth < 901 ? "132%" : "108.5%",
            borderRadius: innerWidth < 901 ? "0" : "0 28% 0 0",
            transform: "translateY(-8%)",
          }}
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
        zIndex={99}
      >
        <Box p={"7%"}>
          <Typography
            variant="h2"
            className="journey-heading-2"
            fontWeight={500}
            gutterBottom
          >
            MISSION
          </Typography>
          <Typography variant="body1" gutterBottom className="journey-text">
            1. Globalization through creation, acquisition, preservation and
            exchange of knowledge.
          </Typography>
          <Typography variant="body1" gutterBottom className="journey-text">
            2. To provide collaborative environment for exchange of ideas,
            virtues & values.
          </Typography>
          <Typography variant="body1" gutterBottom className="journey-text">
            3. To develop good human being possessing scientific temper,
            compassion, empathy, courage and creative imagination.
          </Typography>
          <Typography variant="body1" gutterBottom className="journey-text">
            4. To nurture innovative and socially cultured global citizen.
          </Typography>
          <Typography variant="body1" gutterBottom className="journey-text">
            5. To foster multifaceted excellence in education and research
            outreach.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default GoalsSection;
