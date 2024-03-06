import React, { useContext } from "react";
import { Box, Grid, Stack, Tab } from "@mui/material";
import { AppContext } from "../../../../../../../contexts/AppContext";
import { TabContext, TabList, TabPanel } from "@mui/lab";
// import MessageFromHod from "./Physics/MessageFromHod";
import AboutDepartment from "./Physics/AboutDepartment";
import VisionAndMission from "./Physics/VisionAndMission";
import ScopOfProgram from "./Physics/ScopOfProgram";

function MechanicalEngineering() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const [value, setValue] = React.useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <TabContext value={value}>
        <Grid container maxWidth={maxWidth} mx={"auto"} mt={7}>
          <Grid item xs={12} md={3} pb={4}>
            <Box
              className="smooth-shadow"
              bgcolor={"#fff"}
              p={2}
              borderRadius={4}
              position={"sticky"}
              top={0}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                orientation={`${innerWidth < 900 ? "horizontal" : "vertical"}`}
                textColor="secondary"
                indicatorColor="secondary"
                variant="scrollable"
              >
                {/* <Tab
                  className="align-items-start fw-bold text-start "
                  label="Message From HOD"
                  value="1"
                /> */}
                <Tab
                  className="align-items-start fw-bold text-start "
                  label="About Department"
                  value="2"
                />
                <Tab
                  className="align-items-start fw-bold text-start "
                  label="Vision And Mission"
                  value="3"
                />
                <Tab
                  className="align-items-start fw-bold text-start "
                  label="Scop"
                  value="5"
                />


              </TabList>
            </Box>
          </Grid>
          <Grid item xs={12} md={9} pl={innerWidth < 900 ? "0" : 4}>
            <Box className="smooth-shadow" bgcolor={"#fff"} borderRadius={4}>

              <TabPanel value="2">
                <AboutDepartment />
              </TabPanel>
              <TabPanel value="3">
                <VisionAndMission />
              </TabPanel>
              <TabPanel value="5">
                <ScopOfProgram />
              </TabPanel>

            </Box>
          </Grid>
        </Grid>
      </TabContext>
    </>
  );
}

export default MechanicalEngineering;
