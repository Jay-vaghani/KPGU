import React, { useContext } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";
import { useNavigate } from "react-router-dom";

function AboutSection() {
  const { maxWidth } = useContext(AppContext);

  const navigation = useNavigate();

  return (
    <Box
      maxWidth={maxWidth}
      mx={"auto"}
      mt={7}
      p={"3%"}
      bgcolor={"#fff"}
      className="smooth-shadow"
      borderRadius={4}
    >
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          md={6}
          order={{
            xs: 2,
            md: 1,
          }}
        >
          <h2 className="fs-1 text-uppercase fw-semibold mb-0 ">
            kpgu university
          </h2>
          <h3
            className="text-uppercase fw-semibold"
            style={{ fontFamily: "Nunito sans" }}
          >
            [Formerly known as BITS Edu Campus]
          </h3>
          <Typography
            variant="h5"
            mb={2}
            textAlign={{
              xs: "start",
              md: "justify",
            }}
          >
            Drs. Kiran and Pallavi Patel Global University (KPGU), Vadodara was
            established in 2021 and is approved by
            <Grid container spacing={1} mb={2} mt={1}>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  UGC
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  AICTE
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  PCI
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  GSCPT
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  GNC
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  disableElevation
                  color="info"
                  fullWidth
                  onClick={() => navigation("/about/statutory-recognition")}
                >
                  AYUSH
                </Button>
              </Grid>
            </Grid>
            We Have various undergraduate, postgraduate and diploma courses in
            the disciplines of Engineering & Technology, Management, Science,
            Pharmacy, Nursing, and Ayurvedic Medicine
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          order={{
            xs: 1,
            md: 2,
          }}
        >
          <Box height={"100%"}>
            <img
              src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1703843541/KPGU/campus/KPGU-Gate.webp"
              alt="Kpgu photo"
              className="w-100 h-100 object-fit-cover rounded-4 "
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;


