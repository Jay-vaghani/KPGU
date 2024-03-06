import { Box } from "@mui/material";
import React from "react";
import Paragraph from "../../../../../../../Common/Paragraph";

function AboutDepartment() {
  return (
    <Box borderRadius={4}>
      <h2 className="text-uppercase fw-bold color-secondary mb-4">
        About Department
      </h2>
      <Paragraph
        content={[
          "Bachelor of Science B.Sc. in Physics is undergraduate 3 years (six semesters) course that mainly focus on reasoning, understanding and improving skills of Physics. Physics involves the study of matter and energy. Physics as a subject covers study of the elementary particle to the universe behavioral study with space and time. The goal of physics is to understand how thing works. Department of Physics offers courses in Material Science, Quantum Physics, Nuclear Physics, Mathematical Physics, Space Physics, Electronics for undergraduate, for post graduate program (proposed), Material science is branch of science which deals with the discovery of new materials in the form of either solid or liquid. Material Science is an interdisciplinary branch. One can synthesize new materials in the laboratory and study their physical, chemical, biological properties under some special conditions. Such materials can be useful for next generation."
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
