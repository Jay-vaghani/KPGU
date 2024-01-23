import { Box, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { AppContext } from "../../contexts/AppContext";

function Banner({ banner }) {
  const { maxWidth } = useContext(AppContext);

  return (
    <Stack
      direction={"row"}
      minHeight={"50vh"}
      alignItems={"end"}
      sx={{
        background: `linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 100%), url(${banner.img}) bottom / cover fixed`,
      }}
    >
      <Grid container maxWidth={maxWidth} mx={"auto"} color={"#fff"} px={"3%"} justifyContent={"flex-start"}>
        <h2 className="display-3 fw-semibold">{banner.title}</h2>
      </Grid>
    </Stack>
  );
}

export default Banner;
