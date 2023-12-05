import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Drawer from "../Drawer";
import { AboutLink, Academic, Admission, Campus, ResearchAndPublication } from "../Links";

function DesktopNavBar({innerWith}) {
  const [drawerStatus, setDrawerStatus] = useState(false);
  const [drawerData, setDrawerData] = useState("");

  const toggleDrawer = () => {
    setDrawerStatus(!drawerStatus);
  };

  const linkDataFunction = (linkData) => {
    setDrawerData(linkData);
  };

  return (
    <>
      {" "}
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
      <Drawer
        drawerStatus={drawerStatus}
        toggleDrawer={toggleDrawer}
        drawerData={drawerData}
        setDrawerStatus={setDrawerStatus}
        innerWith={innerWith}
      />
    </>
  );
}

export default DesktopNavBar;
