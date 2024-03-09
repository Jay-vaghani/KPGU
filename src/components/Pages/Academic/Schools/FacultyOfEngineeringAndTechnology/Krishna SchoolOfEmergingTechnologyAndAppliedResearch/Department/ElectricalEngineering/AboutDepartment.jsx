// ============== React Imports ==============

import React from "react";

// ============== MUI Imports ==============

import { Box } from "@mui/material";

// ============== Custom Components Imports ==============

import Paragraph from "../../../../../../../Common/Paragraph";

function AboutDepartment() {
  return (
    <Box borderRadius={4}>
      <h2 className="text-uppercase fw-bold color-secondary mb-4">
        About Department
      </h2>
      <Paragraph
        content={[
          "The Department of Electrical Engineering of the KSET, KPGU- Vadodara came into existence in the year 2021.It was in existence as a constituent department of the Babaria Institute of Technology, Vadodara from 2004. The department has qualified and dedicated faculty members from NITs and other premier Institutes. The department is conducting U.G. program in Electrical Engineering Faculties of the department encourage students for practical learning through their projects and dissertations. Many students have secured gold medals and university ranks consistently under the guidance of well-educated and devoted faculty members.",
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
