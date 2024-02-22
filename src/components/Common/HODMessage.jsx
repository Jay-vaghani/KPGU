import { Box, Button, Grid } from "@mui/material";
import React from "react";
import Quote from "./Quote";
import { MarkunreadRounded } from "@mui/icons-material";
import Paragraph from "./Paragraph";

function HODMessage({
  hodImg,
  hodName,
  hodEmail,
  hodMessage,
  hodOf,
  hodOfShort,
}) {
  return (
    <>
      <Grid
        container
        borderRadius={4}
        overflow={"hidden"}
        className="smooth-shadow-card"
      >
        <Grid item xs={12} md={4}>
          <Box overflow={"hidden"} height={"100%"}>
            <img
              src={hodImg}
              alt="hodectors Image"
              className="w-100 h-100 object-fit-cover"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box bgcolor={"#fff"} height={"100%"} p={2}>
            <h2 className="fs-1 fw-semibold">{hodName}</h2>
            <h5 className="text-secondary fw-semibold mb-0">
              Head of Department <br />
            </h5>
            <h4 className="color-secondary fw-bold">
              {hodOf} <br />
              {hodOfShort}
            </h4>
            <Button
              variant="contained"
              color="secondary"
              href={`mailto:${hodEmail}`}
              disableElevation
              startIcon={<MarkunreadRounded />}
              className="text-lowercase mt-2"
            >
              {hodEmail}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box bgcolor={"#fff"} p={2} borderRadius={4} mt={4}>
        <h2 className="fw-bold color-secondary mb-1">Message From HOD </h2>
        <h5 className="fw-bold color-secondary">Welcome To KPGU</h5>
        <Box mt={4}>
          {hodMessage.map((para, index) => (
            <Paragraph content={[para]} key={index} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default HODMessage;
