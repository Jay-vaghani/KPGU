import { Box, Stack } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {
  const MissionList = [
    "To Provide quality technical education with an emphasis on Mechanical Engineering skills by using innovative teaching and learning methods.",
    "To develop required knowledge and skills of the students for Industry and Higher education.",
    "We aim to create an environment enabling excellence in teaching, learning and research in order to cultivate entrepreneurs and innovators within Mechanical Engineering for sustainable improvement.",
  ];

  return (
    <>
      <Box borderRadius={4} className="smooth-shadow-card p-3">
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "We aim to build a world-class educational center for the Mechanical Engineering sector to fulfill the current and future challenges of technological development, research and to prepare managers and leaders with innovative thinkers to better the eco-system. "
          }
          right={true}
        />
      </Box>
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
