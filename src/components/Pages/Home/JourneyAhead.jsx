import React, { useContext } from "react";
import { Box } from "@mui/material";
import { AppContext } from "../../../contexts/AppContext";

function JourneyAhead() {
  const { maxWidth } = useContext(AppContext);

  return (
    <Box width={maxWidth} mx={"auto"}>
      JourneyAhead
    </Box>
  );
}

export default JourneyAhead;
