import React, { useContext, useState } from "react";
import { Box, Grid, Tab, Tabs } from "@mui/material";
import { AppContext } from "../../../../../contexts/AppContext";
import { Outlet } from "react-router-dom";

function FacultyOfEngineeringAndTechnology() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const [value, setValue] = useState("KSET");
  const tabCss = {
    textTransform: "uppercase",
    fontWeight: 600,
    alignItems: "start",
    textAlign: "start",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <Grid container spacing={2} position={"relative"}>
        <Grid item xs={12} lg={3}>
          <Box
            bgcolor={"#fff"}
            p={2}
            borderRadius={2}
            className="smooth-shadow"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              orientation={`${innerWidth < 1200 ? "horizontal" : "vertical"}`}
              variant={`${innerWidth < 1200 ? innerWidth < 1000? "scrollable" :  "fullWidth" : "scrollable"}`}
              indicatorColor="secondary"
              textColor="secondary"
              
            >
              <Tab
                label="Krishna School of Emerging Technology & Applied Research"
                value={"KSET"}
                sx={tabCss}
              />
              <Tab
                label="Krishna&nbsp;School&nbsp;of Diploma Studies"
                sx={tabCss}
                value={"KSDS"}
              />
              <Tab
                label="Krishna&nbsp;School&nbsp;of Technology"
                sx={tabCss}
                value={"KST"}
              />
            </Tabs>
          </Box>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Box
            bgcolor={"#fff"}
            minHeight={"100%"}
            p={2}
            borderRadius={2}
            className="smooth-shadow"
          >
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FacultyOfEngineeringAndTechnology;
