import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";

function Banner({title}) {
  const { maxWidth } = useContext(AppContext);

  return (
    <Stack
      direction={"row"}
      minHeight={"50vh"}
      alignItems={"center"}
      sx={{
        background:
          "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%), url('https://res.cloudinary.com/dby2vbxv3/image/upload/v1702100388/KPGU/Banners/banner-2.jpg') bottom / cover",
      }}
    >
      <Grid container maxWidth={maxWidth} mx={"auto"}  color={"#fff"} p={"3%"}>
        <h2 className="display-3 fw-semibold">SPONSORING BODY-SKECT</h2>
      </Grid>
    </Stack>
  );
}

export default Banner;
