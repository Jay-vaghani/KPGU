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
          "Department of Electrical Engineering came into existence in the year 2004. The department has well qualified and dedicated faculty members with specialization in various areas like Power System, Power Electronics, Electrical Drives, Automation and Control. The department is conducting Diploma, U.G.  Program in Electrical Engineering. Faculties of the department encourage students for research and development as well as innovation and start up through their projects. Many students have secured gold medals and university ranks consistently under the guidance of well-educated and devoted faculty members. There are several outstanding motives to select Electrical Engineering at KPGU such as excellent college environment with easily available staff for mentoring students, highly qualified, trained and expert faculty members, well established labs provide hands-on learning experiences, chance to work with industry before graduation through Enterprise awareness and internship programs, chances to study in various countries through our collaboration with universities abroad.",
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
