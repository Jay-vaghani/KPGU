import { Box, Stack } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {
  const MissionList = [
    "Procure quality teaching-learning, research and service opportunities leading to holistic development of students through collusive exchange of ideas, unallied thought, and the highest ethical standards.",
    "Serve high quality academic experiences through comprehensive & relevant curriculum atUG levels.",
    "Foster research aptitude by extending infrastructural support and research guidance",
    "Inculcate the values of multi-disciplinary and inter-disciplinary approach and innovative thinking by promoting learning experiences in the field of chemical sciences and its alliedfields.",
    "Fruitage knowledgeable graduates for careers in academia, industry and GOs/NGOs.",
    "Promote an ethical and professional environment amongst faculties and students of the department."
  ];



  return (
    <>
      <Box borderRadius={4} className="smooth-shadow-card p-3" textAlign={"justify"}>
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "The Department of Chemistry endeavors to be perceived for excellence in Teaching – Learning adjunct by accrediting graduating students to strive in and confer to the developing exigency of the society."
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
