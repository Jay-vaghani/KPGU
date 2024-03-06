import { Box, Stack } from "@mui/material";
import React from "react";
import { KeyboardDoubleArrowRightRounded } from "@mui/icons-material";
import Quote from "../../../../../../../Common/Quote";

function VisionAndMission() {
  const MissionList = [
    "To equip all of our students with the conceptual understanding, computational skills, and persistent disposition required to use quantitative reasoning and analysis effectively in their personal and professional lives.",
    "To make student aware of technology to explore mathematical concepts through activities and experimentation.",
    "To inculcate in students, the ability to apply mathematical and computational skills to model,formulate and solve real life applications.",
    "To make the students capable of discharging professional,social and economic responsibilities ethically.",
    "To provide platform to acquire abilities to evaluate problems using analytical/numerical/graphical techniques.",
    "To achieve high standards of excellence in generating and propagating knowledge in Mathematics. Department is committed to providing an education that combines rigorous academics with joy of discovery."
  ];

  return (
    <>
      <Box borderRadius={4} className="smooth-shadow-card p-3">
        <h2 className="fw-bold color-secondary fs-1">Vision</h2>
        <Quote
          quote={
            "Imparting of quality mathematics education and the inculcating of the spirit of research through innovative teaching and research methodologies."
          }
          right={true}
        />
        <Quote
          quote={
            "The long term vision of this department is to prepare qualified graduates/post graduates who are equipped with deeper insight and research skills in the field of Mathematics."
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
