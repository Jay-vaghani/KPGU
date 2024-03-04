import { Box, Stack } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {
  const MissionList = [
    "To inculcate collaborative and innovative culture in students by offering best quality education.",
    "To excel them in engineering and technology domain by excellent teaching learning process.",
    "To provide innovative environment to learn, innovate and create new ideas for the betterment of oneself and global society.",
    "To develop good responsible citizen through ethics and eco-friendly culture.",
  ];

  return (
    <>
      <Box borderRadius={4} className="smooth-shadow-card p-3">
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "To develop the department into a center of excellence in education, research, training and consultancy to the extent that it becomes a significant entity in the technical and overall development of the country, offering value driven skill development programs and consistent high degree of professional development of students leading to responsible global citizens."
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
