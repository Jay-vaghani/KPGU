import { Box, Tab, Tabs } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Outlet, useNavigate } from "react-router-dom";

function KrishnaSchoolOfEmergingTechnologyAndAppliedResearch() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  const navigate = useNavigate();

  const [value, setValue] = useState("Diploma");
  const tabCss = {
    textTransform: "uppercase",
    fontWeight: 600,
    textAlign: "start",
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <h3 className="fw-bold">
        Krishna School Of Emerging Technology And Applied Research [K.S.E.T]
      </h3>

      <Box my={4}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant={`${innerWidth < 780 ? "scrollable" : "fullWidth"}`}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab
            label="Diploma"
            sx={tabCss}
            value={"Diploma"}
            onClick={() => navigate("diploma")}
          />
          <Tab
            label="UG"
            sx={tabCss}
            value={"UG"}
            onClick={() => navigate("ug")}
          />
          <Tab
            label="PG"
            sx={tabCss}
            value={"PG"}
            onClick={() => navigate("pg")}
          />
          <Tab
            label="PG [ Management ]"
            sx={tabCss}
            value={"PG [Management]"}
            onClick={() => navigate("pg-management")}
          />
        </Tabs>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
}

export default KrishnaSchoolOfEmergingTechnologyAndAppliedResearch;
