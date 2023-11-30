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
import DesktopNavBar from "./DesktopNavBar/DesktopNavBar";
import MobileNavbar from "./MobileNavBar/MobileNavbar";

function MainNavBar({ innerWith }) {
  const width = {
    xs: "120px",
    sm: "170px",
    lg: "200px",
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
        <Box display={innerWith < 1060 ? "none" : "block"}>
          <DesktopNavBar />
        </Box>
        <Box display={innerWith < 1060 ? "block" : "none"}>
          <MobileNavbar innerWith={innerWith} />
        </Box>
      </Stack>
    </AppBar>
  );
}

export default MainNavBar;
