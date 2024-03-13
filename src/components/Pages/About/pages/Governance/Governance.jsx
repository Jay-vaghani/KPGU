import { Box, Grid, Tabs, Tab } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../contexts/AppContext";
import { Outlet, useNavigate } from "react-router-dom";

function Governance() {
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
    <Box maxWidth={maxWidth} mx={"auto"} p={"5%"}>
      <Grid container spacing={2} position={"relative"}>
        <Grid item xs={12} lg={4}>
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
                label={"Governing Body"}
                sx={tabCss}
                onClick={() => navigate("governing-body")}
              />
              <Tab
                label={"Board Of Management"}
                sx={tabCss}
                onClick={() => navigate("board-of-management")}
              />
              <Tab
                label={"Academic Council"}
                sx={tabCss}
                onClick={() => navigate("academic-council")}
              />
              <Tab
                label={"Board Of Studies"}
                sx={tabCss}
                onClick={() => navigate("board-of-studies")}
              />
              <Tab
                label={"Finance Committee"}
                sx={tabCss}
                onClick={() => navigate("finance-committee")}
              />
            </Tabs>
          </Box>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Box
            p={2}
            bgcolor={"#fff"}
            className={"smooth-shadow"}
            borderRadius={1}
          >
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Governance;
