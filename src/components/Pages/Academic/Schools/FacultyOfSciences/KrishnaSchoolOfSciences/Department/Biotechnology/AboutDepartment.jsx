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
          "The Department of Biotechnology was recently established in 01st June 2020, and initially functioned in the University’s main campus at the Krishna school of Science, Drs. Kiran Patel & Pallavi Global University, Vadodara. The B.Sc. programme was initiated with the enrolment of 60 students each year under choice based credit system (CBCS). The Department provides ample scope to students and faculties for academics and research.  Each  faculty  member manages  and  runs  his/her  laboratory  independently  where  research  is  carried  out  in  different  areas  of basic  and  applied  Biotechnology.  The  faculty  members  have  had  national  as  well  as  international collaborations  to  develop  mutually  beneficial  scientific  interactions.  This  has  also  helped  our  laboratories to  develop  new  technologies  diversify  our  areas  of  research. The class size is kept large enough to provide a vibrant learning environment. The department of Biotechnology is well-equipped with modern laboratories to provide quality teaching and research opportunities for students. The department provide the consultancy to various leading industries related to food, pharmaceutical and agrochemicals sector. The Department has the facilities like UV-Visible Spectrophotometer, Laminar Air flow chamber, Cooling Centrifuge, Autoclave, Light microscope, Water Bath, Orbital Shaker Incubator, Bacteriological Incubator, UV-Trans illuminator, Hot Air Oven, Refrigerator, pH meter, Dry Bath, Weighing balance, Magnetic stirrer, Vortex and Gel electrophoresis apparatus etc.",
          "Other co-curricular activities such as NCC, NSS, social drives, Blood donation camp , Industrial visits, picnic to historical places etc. are organised by the department to create social awareness among students."
        ]}
      />
    </Box>
  );
}

export default AboutDepartment;
