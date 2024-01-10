import { Box, Grid, Tabs, Tab } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../contexts/AppContext";
import { Outlet, useNavigate } from "react-router-dom";

function Infrastructure() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const [value, setValue] = useState(0);
  const tabCss = {
    textTransform: "uppercase",
    fontWeight: 600,
    alignItems: "start",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate();

  return (
    <>
      <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
        <Grid container spacing={2} position={"relative"}>
          <Grid item xs={12} lg={3}>
            <Box
              position={"sticky"}
              top={0}
              p={2}
              bgcolor={"#fff"}
              className={"smooth-shadow"}
              borderRadius={1}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                orientation={`${innerWidth < 1200 ? "horizontal" : "vertical"}`}
                variant="scrollable"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab
                  label={"Smart Classrooms"}
                  sx={tabCss}
                  onClick={() => navigate("smart-classrooms")}
                />
                <Tab
                  label={"Multimedia classrooms "}
                  sx={tabCss}
                  onClick={() => navigate("multimedia-classrooms")}
                />
                <Tab
                  label={"laboratories "}
                  sx={tabCss}
                  onClick={() => navigate("laboratories")}
                />
                <Tab
                  label={"Cafeteria"}
                  sx={tabCss}
                  onClick={() => navigate("cafeteria")}
                />
                <Tab
                  label={"Library "}
                  sx={tabCss}
                  onClick={() => navigate("library")}
                />
                <Tab
                  label={"Auditorium"}
                  sx={tabCss}
                  onClick={() => navigate("auditorium")}
                />
                <Tab
                  label={"Workshop"}
                  sx={tabCss}
                  onClick={() => navigate("workshop")}
                />
                <Tab
                  label={"Hostels"}
                  sx={tabCss}
                  onClick={() => navigate("hostels")}
                />
                <Tab
                  label={"Hostel Room"}
                  sx={tabCss}
                  onClick={() => navigate("hostel-room")}
                />
                <Tab
                  label={"Hostel Mess"}
                  sx={tabCss}
                  onClick={() => navigate("hostel-mess")}
                />
                <Tab
                  label={"Stationary Stall"}
                  sx={tabCss}
                  onClick={() => navigate("stationary-stall")}
                />
                <Tab
                  label={"RO Plant"}
                  sx={tabCss}
                  onClick={() => navigate("ro-plant")}
                />
                <Tab
                  label={"Playground "}
                  sx={tabCss}
                  onClick={() => navigate("playground")}
                />
                <Tab
                  label={"Bank & ATM"}
                  sx={tabCss}
                  onClick={() => navigate("bank-atm")}
                />
                <Tab
                  label={"Parking"}
                  sx={tabCss}
                  onClick={() => navigate("parking")}
                />
              </Tabs>
            </Box>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Box borderRadius={1} minHeight={"100%"}>
              <Outlet />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Infrastructure;
