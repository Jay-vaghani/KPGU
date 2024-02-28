import { Box, Stack } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {
  const MissionList = [
    "To strengthen the core proficiency in Computer Science and Engineering and through analytical   learning.",
    "To empower the students with the required skills to solve the intricate technological problems of modern society and also provide them with an outline for promoting collaborative and multidisciplinary activities.",
    "To impart moral and ethical values, and interpersonal skills to the students.",
  ];

  return (
    <>
      <Box borderRadius={4} className="smooth-shadow-card p-3"  textAlign={"justify"}>
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "To create an inspiring and conducive environment for quality research and academic education in computer science and engineering and produce globally competent students with moral values, self-motivation, and technology proficiency to build a vibrant nation."
          }
          right={true}
        />
      </Box>
      <Box mt={7} borderRadius={4} className="smooth-shadow-card p-3">
        <h2 className="fw-bold color-secondary fs-1 mb-4">Mission</h2>
        <Box pl={2} color={"secondary.main"}>
          {MissionList.map((des, index) => (
            <Stack direction={"row"} key={index} mb={1} textAlign={"justify"}>
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
