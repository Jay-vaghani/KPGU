import { Box, Grid } from "@mui/material";
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
          "Drs. Kiran and Pallavi Patel Global University, formerly known as Babaria Institute of Technology was established in 2004 and the Department of Civil Engineering is a part of the Institute. If Civil Engineering is compared with the human body, Civil Engineer can be related with the body shape and the Structural Engineer can be related with the skeleton.” Civil Engineering is one of the most profitable and core Engineering options among students in India who are planning to pursue a career in conventional and promising branches of engineering. Whenever you see or read about any popular landmark in the world, iconic works like Golden Gate Bridge or The Gateway of India, there are several Civil Engineers involved in its construction.",
        ]}
      />
      <h5 className="text-uppercase fw-bold color-secondary mb-4 mt-5">
        The department has grown tremendously over past years and now is one of the major engineering departments of the institute.
      </h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Department develops strong links with industries and academic institutions like NITs & IITs.</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Apart from high quality teaching at UG level, the department is actively involved in basic research in various fields of engineering through various student based projects and working models on various advanced techniques.</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">The Department actively promotes faculty development activity and the course work is in line with the syllabus of Gujarat Technological University.</h5>
      <h5 className="mb-3 color-secondary fw-semibold p-2 smooth-shadow-card rounded-3 ">Highly qualified, dynamic and well experienced Faculties.</h5>
    </Box>
  );
}

export default AboutDepartment;
