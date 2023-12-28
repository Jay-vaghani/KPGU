import React, { useContext } from "react";
import { AppContext } from "../../../../contexts/AppContext";
import { Box } from "@mui/material";

function VisionMission() {
  const { maxWidth, innerWidth } = useContext(AppContext);

  return (
    <Box maxWidth={maxWidth} mx={"auto"} p={"3%"}>
      <h4 className=" fw-semibold color-secondary">VISION & MISSION OF</h4>
      <h3 className="display-4 fw-semibold mb-4">
        Drs. Kiran & Pallavi Patel Global University
      </h3>
    </Box>
  );
}

export default VisionMission;
