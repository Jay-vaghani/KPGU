import { Box, Stack } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {
  const MissionList = [
    " By providing outstanding technical education, students will have strong technological industry-oriented knowledge, a skill-based foundation, and the ability to create.",
    "As responsible citizens, develop qualified and employable diploma engineers.",
    "To adapt changing technologies to meet social needs when solving electrical engineering problems.",
    ];

  return (
    <>
      <Box borderRadius={4} className="smooth-shadow-card p-3"  textAlign={"justify"}>
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "To establish a department of global repute producing Electrical Engineering personals with excellent technical competence and professional skills."
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
