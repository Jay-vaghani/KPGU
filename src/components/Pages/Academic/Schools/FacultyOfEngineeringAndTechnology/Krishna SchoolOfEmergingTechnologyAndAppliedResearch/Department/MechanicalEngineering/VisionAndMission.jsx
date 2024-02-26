import { Box, Stack } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {
  const MissionList = [
    "Globalization through creation, acquisition, preservation and exchange of knowledge.",
    "To provide collaborative environment for exchange of ideas, virtues & values.",
    "To develop good human being possessing scientific temper, compassion, empathy, courage and creative imagination.",
    "To nurture innovative and socially cultured global citizen.",
    "To foster multifaceted excellence in education and research outreach.",
  ];

  return (
    <>
      <Box borderRadius={4} className="smooth-shadow-card p-3">
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "KPGU Aspires to be globally acclaimed a value-driven University, recognized for excellence in teaching, research and outreach; promoting access and inclusion; collaborative and innovative culture; and prepare socially responsible global citizens."
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
