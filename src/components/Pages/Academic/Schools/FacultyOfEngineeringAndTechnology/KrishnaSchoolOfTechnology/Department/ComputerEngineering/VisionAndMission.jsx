import { Box, Stack } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {
  const MissionList = [
    "To produce computer professionals and technocrats through proficient mentors and researchers to satisfy global needs.",
    "To foster the state-of-art technologies and extend the platform to inculcate innovation and interdisciplinary research",
    "To imbibe moral and ethical values that creates responsible citizens with great human values & interpersonal skills",
    "To strengthen the partnership with industries, research organizations, and educational institutions that will enable the young graduate to emerge as a leader in academics or in entrepreneurship",
  ];

  return (
    <>
      <Box borderRadius={4} className="smooth-shadow-card p-3"  textAlign={"justify"}>
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "To evolve as a center of excellence in Computer Science & Engineering and to prepare value driven, globally competent Computer Engineers by imparting quality education through innovation, research, collaboration and contribute in the development of society at large."
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
