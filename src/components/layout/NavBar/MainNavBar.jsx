import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Drawer from "./Drawer";
import {
  AboutLink,
  Academic,
  Admission,
  Campus,
  ResearchAndPublication,
} from "./Links";

function MainNavBar() {
  const width = {
    xs: "170px",
    lg: "200px",
  };

  const [drawerStatus, setDrawerStatus] = useState(false);
  const [drawerData, setDrawerData] = useState("");

  const toggleDrawer = () => {
    setDrawerStatus(!drawerStatus);
  };

  const linkDataFunction = (linkData) => {
    setDrawerData(linkData);
  };

  return (
    <AppBar position="sticky" elevation={0} color="transparent">
      <Stack
        p={2}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box width={width}>
          <img
            src="https://res.cloudinary.com/dby2vbxv3/image/upload/v1699517175/KPGU/logo.svg"
            alt="Logo"
            width={"100%"}
          />
        </Box>
        <Stack direction={"row"} spacing={1}>
          <Button size="small">
            <Typography fontWeight={600} className="navLink" fontSize={"15px"}>
              Home
            </Typography>
          </Button>
          <Button
            size="small"
            onClick={() => {
              toggleDrawer();
              linkDataFunction(AboutLink);
            }}
          >
            <Typography fontWeight={600} className="navLink" fontSize={"15px"}>
              ABOUT US
            </Typography>
          </Button>
          <Button
            size="small"
            onClick={() => {
              toggleDrawer();
              linkDataFunction(Academic);
            }}
          >
            <Typography fontWeight={600} className="navLink" fontSize={"15px"}>
              ACADEMIC
            </Typography>
          </Button>
          <Button
            size="small"
            onClick={() => {
              toggleDrawer();
              linkDataFunction(Campus);
            }}
          >
            <Typography fontWeight={600} className="navLink" fontSize={"15px"}>
              CAMPUS
            </Typography>
          </Button>
          <Button
            size="small"
            onClick={() => {
              toggleDrawer();
              linkDataFunction(Admission);
            }}
          >
            <Typography fontWeight={600} className="navLink" fontSize={"15px"}>
              ADMISSIONS
            </Typography>
          </Button>
          <Button size="small">
            <Typography fontWeight={600} className="navLink" fontSize={"15px"}>
              PLACEMENTS
            </Typography>
          </Button>
          <Button
            size="small"
            onClick={() => {
              toggleDrawer();
              linkDataFunction(ResearchAndPublication);
            }}
          >
            <Typography fontWeight={600} className="navLink" fontSize={"15px"}>
              RESEARCH & PUBLICATIONS
            </Typography>
          </Button>
        </Stack>
      </Stack>
      <Drawer
        drawerStatus={drawerStatus}
        toggleDrawer={toggleDrawer}
        drawerData={drawerData}
      />
    </AppBar>
  );
}

export default MainNavBar;
