// ============== React Imports ==============

import React from "react";

// ============== MUI Imports ==============

import { Box, Stack } from "@mui/material";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";

// ============== Custom Components Imports ==============

import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {


  const MissionList = [
    "Produce professionally brilliant and motivated Engineers in the field of Civil Engineering",
    "Undertake developmental research, consultancy and technical interaction with industry",
    "Meet the global need of competent and dedicated professionals through research & development, consultancy & extension activities which are relevant to the needs of mankind",
    "Execute community driven, holistic programs with diverse and inclusive governance.",
  ];

  return (
    <>
      {/* ================================ Vision Section ================================ */}

      <Box borderRadius={4} className="smooth-shadow-card p-3">
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "To develop the department into a center of excellence in education, research, training and consultancy to the extent that it becomes a significant player in the technical and overall development of the country and with skill-based knowledge achieve new horizons."
          }
          right={true}
        />
      </Box>

      {/* ================================ Mission Section ================================ */}

      <Box mt={7} borderRadius={4} className="smooth-shadow-card p-3">
        <h2 className="fw-bold color-secondary fs-1 mb-4">Mission</h2>
        <Box pl={2} color={"secondary.main"}>
          {MissionList.map((des, index) => (
            <Stack direction={"row"} key={index} mb={1}>
              <Box>
                <KeyboardDoubleArrowRightRounded sx={{ fontSize: "25px" }} />
              </Box>
              <Box>
                <h4>{des}</h4>
              </Box>
            </Stack>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default VisionAndMission;
