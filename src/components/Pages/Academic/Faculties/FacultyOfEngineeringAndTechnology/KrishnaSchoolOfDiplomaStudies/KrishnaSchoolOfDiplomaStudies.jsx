import { Box, Tab, Tabs } from "@mui/material";
import React, { useContext, useState } from "react";
import { AppContext } from "../../../../../../contexts/AppContext";
import { Outlet, useNavigate } from "react-router-dom";

function KrishnaSchoolOfDiplomaStudies() {
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
        Krishna School of Diploma Studies [K.S.D.S]
      </h3>

      <Box my={4}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab
            label="Diploma"
            sx={tabCss}
            value={"Diploma"}
            onClick={() => navigate("diploma")}
          />
        </Tabs>
      </Box>
      <Box>
        <Outlet />
      </Box>
    </Box>
  )
}

export default KrishnaSchoolOfDiplomaStudies